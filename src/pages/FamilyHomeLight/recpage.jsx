import React, { useState, useEffect, useRef } from 'react';

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Img, Text, TimeComponent, Weather } from "components";
import 'styles/loading.css';
import 'styles/font.css'
const LoadingScreen = () => {
    return (
        <div className='lodaing-screen'>
            
            <img src='/images/spinner.gif' alt='로딩 중' />
        </div>
        );
    };
 

function FamilyHomeLightPage() {
  const [loading, setLoading] = useState(true);
  const [genposter, setGenposter] = useState([]);
  const [rankposter, setRankposter] = useState([]);
  const [recposter, setRecposter] = useState([]);
  const [yetposter, setYetposter] = useState([]);
  const [current, setCurrent] = useState('');
  // const [movie, setMovie] = useState([]);
  // const [drama, setDrama] = useState([]);
  const [startIndex, setStartIndex] = useState(localStorage.getItem('startIndex'));
  const [userposter, setUserposter] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // const mainApi = async () = {
    //   setLoading(true);
    //   try {
    //     const response = await fetch(`api url`)
    //   }
    // }

  
    const fetchData = async () => {
      try{
        const access = localStorage.getItem('access_token');
        if (!access) {
          navigate('/');
          return; // 로그인 페이지로 이동 후 함수 종료
        }
      
        // setLoading(true);
        // const mresponse = await axios.get('https://hello00back.net/home/영화')
        // console.log("영화 추천 :", mresponse.data)
        // const dresponse = await axios.get('https://hello00back.net/home/TV드라마')
        // console.log("드라마 수신 여부", dresponse.status)
        // if (mresponse.status && dresponse.status === 200){
        //   const mdata = mresponse.data.data;
        //   const ddata = dresponse.data.data;

        //   const movie = mdata.map(item => item); //주간 랭킹
        //   const drama = ddata.map(item => item); // 장르별
          
          
          

      //     setMovie(movie);
      //     setDrama(drama);
      //     console.log("영화", movie, "드라마",drama);
        
      //     setLoading(false);
      //   }


    } catch (error) {
      let loadingTimer = setTimeout(() => {
        setLoading(false); // 10초 후에 로딩 완료
        // 실패 로직 필요시 추가
        clearTimeout(loadingTimer); // 타이머 초기화
      }, 10000);
      console.error('Error fetching data:', error);
    }
      

      
      try {
        const access = localStorage.getItem('access_token');
        if (!access) {
          navigate('/');
          return; // 로그인 페이지로 이동 후 함수 종료
        }

        console.log('access token 은', access);
        setLoading(true);
        
        const gen = JSON.parse(localStorage.getItem('genre'));
        const genre = gen ? gen.join(',') : null;
        console.log(genre);

        
        
        const response = await axios.get('https://hello00back.net/vodrec', {
          headers: {
            Authorization : access,
            Data : genre,
          },
    


      });

      
        if (response.status === 200) {
          console.log("여긴 문제가 아니야")
        
        
          const data = response.data.data;
          const current = response.data.current;
          console.log(current);
          const selectedItems = data[0].slice(startIndex, startIndex + 10);
          const rankItems = data[1];
          const userItems = data[2].slice(startIndex, startIndex + 10);
          const recItems = data[3].slice(startIndex, startIndex + 10);
          const yetItems = data[4]
        

          console.log(data);

          const rankposter = rankItems.map(item => item); //주간 랭킹
          const genposter = selectedItems.map(item => item); // 장르별
          const userposter = userItems.map(item=> item); // 사용자 개인
          const recposter = recItems.map(item=> item); // 관련 추천
          const yetposter= yetItems.map(item=> item); //덜 본거
          console.log("아직 시청중", yetposter);
          console.log("")
          setGenposter(genposter);
          setUserposter(userposter);
          setRankposter(rankposter);
          setRecposter(recposter);
          setYetposter(yetposter);
          setCurrent(current);
          setLoading(false);
        }

      
      } catch (error) {
        let loadingTimer = setTimeout(() => {
          setLoading(false); // 10초 후에 로딩 완료
          // 실패 로직 필요시 추가
          clearTimeout(loadingTimer); // 타이머 초기화
        }, 10000);
        console.error('Error fetching:', error);
      }
      
      
    };

    fetchData();
  }, [navigate, startIndex]);

  // useEffect(() => {
  //   const unlisten = navigate.listen(() => {
  //     const savedStartIndex = parseInt(localStorage.getItem('startIndex'), 10) || 0;
  //     setStartIndex(savedStartIndex);
  //     });
  //   return () => {
  //     unlisten();
  //   };
  


  const Rerec = () => {
    const saveToLocalStorage = (startIndex) => {
      localStorage.setItem('startIndex', startIndex);
    };
    
    const currentStartIndex = parseInt(localStorage.getItem('startIndex'), 10) || 0;
  
    if (currentStartIndex < 90) {
      const updatedStartIndex = currentStartIndex + 10;
      setStartIndex(updatedStartIndex);
      saveToLocalStorage(updatedStartIndex);
    } else {
      setStartIndex(0);
      localStorage.setItem('startIndex', startIndex);
    }
  }
   const Click = (dataItem) => {
     navigate(`/Light/${dataItem}`);
  }
  // Component
  
  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '24px',
    outline: 'none',
    padding: '10px',
    color: '#555',
    width: '50px', // 원하는 너비 설정
    height: '50px',
  };
  
  const HorizontalPosters = ({ rankposter }) => {
    const containerRef = useRef(null);
  
    const scrollTo = (scrollOffset) => {
      const container = containerRef.current;
      container.scrollLeft += scrollOffset;
    };

    return (
      <div style={{postion: 'relative', display:'flex', alignItems: 'center', marginLeft: '15%', marginRight: '-500%' }}>
        <button onClick={() => scrollTo(-600)} style={{...buttonStyle, position: 'absolute', left: '5%'}}><img src="https://seasonmarket.co.kr/img/slider_left.png" alt="Previous"/></button>
        <div style={{postion: 'relative', display: 'flex', overflowX: 'auto', marginLeft: '2%', marginRight: '0', minWidth: '96%', maxWidth: '96%'}} ref={containerRef}>
          {rankposter.map((item, index) => (
            <img
              key={index}
              style={{ width: '220px', height: '270px', marginRight: '20px', border: '2px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
              src={item[2]}
              alt={`${index}`}
              onClick={() => Click(item[0])}
            />
          ))}
        </div>
        <button onClick={() => scrollTo(600)} style={{...buttonStyle, position: 'absolute', right: '-520%'}}>
          <img src="https://seasonmarket.co.kr/img/slider_right.png" alt="next"/></button>
      </div>
    );
  };

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-red-A400 flex md:flex-col flex-row md:gap-5 items-start justify-end pb-1.5 px-1.5 w-full">
            <Img
              className="common-pointer absolute h-[33px] left-10 md:mt-0 mt-[26px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
              onClick={() => navigate('/frontpagelight')}
            />
            <div className="relative h-[80px] w-[20%] mr-[1%] mt-[0.5%] w-[15%] md:w-full">
              <Weather />
            </div>
            <Text
              className="ml-9 md:ml-[0] mr-[15px] md:mt-0 mt-[30px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[-0.16px]"
              size="txtInterSemiBold32"
            >
              <TimeComponent/>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-yogi md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[120px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="flex flex-col items-center justify-start mt-[29px] mx-auto w-[48%]">
                <div className="flex flex-col gap-[15px] items-start justify-start w-[74%] md:w-full">
                  <Img
                    className="h-[45px]"
                    src="images/img_search.svg"
                    alt="rewind"
                  />
                  <Text
                    className="ml-1 md:ml-[0] text-[20px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-2px]"
                    size="txtYogi"
                  >
                    검색
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-col gap-2.5 items-center justify-start mt-[50px] w-full"
                  onClick={() => navigate("/frontpagelight")}
                >
                  <Img
                    className="h-[45px]"
                    src="images/img_home.svg"
                    alt="home"
                  />
                  <Text
                    className="text-[20px] text-center font-yogi text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtABeeZeeRegular22"
                  >
                    홈
                  </Text>
                </div>
                <div className="flex flex-col gap-[11px] items-center justify-start mt-[55px] w-full">
                  <Img
                    className="h-[45px]"
                    src="images/img_star.svg"
                    alt="star"
                  />
                  <Text
                    className="text-[20px] text-center font-yogi text-gray-800 md:text-xl tracking-[-2px]"
                    size="txtYogi"
                  >
                    드라마
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start mt-[55px] w-[92%] md:w-full">
                  <Img
                    className="h-[45px]"
                    src="images/img_thumbsup.svg"
                    alt="lock"
                  />
                  <Text
                    className="text-[20px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtYogi"
                  >
                    영화
                  </Text>
                </div>
              </div>

              <div className="flex flex-col gap-[17px] items-center justify-start mb-[38px] mt-[55px] mx-auto w-[48%]">
                <Img
                  className="h-[45px]"
                  src="images/img_qrcode.svg"
                  alt="contrast"
                  onClick={Rerec}
                />
                <Text
                  className="text-[20px] text-center sm:text-lg text-red-A400 md:text-xl tracking-[-2px]"
                  size="txtYogi"
                  onClick={Rerec}
                >
                  재추천
                </Text>
              </div>
            </Sidebar>
         
            {loading ? (
              <div className='overlay'>
                <LoadingScreen />
              </div>
            ) : ( 
                  
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start" style={{ marginTop: '10px' }}>
                  <Text
                    className="leading-[10.00px] pl-[50px] sm:text-[21px] md:text-[23px] text-[30px] text-black-900 tracking-[-0.13px] w-full font-yogi"
                    size="txtYogi"
                  >
                    <span className="text-black-900 font-yogi text-left">
                      주간 베스트{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Ranking{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[2%] md:w-full mt-[1.5%]">
                  
                      <div className="video-container">
                        <HorizontalPosters rankposter={rankposter} />
                      </div>
                  
                  </div>
                </div>
            </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start" style={{ marginTop: '50px' }}>
                  <Text
                    className="leading-[100.00px] pl-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
                    size="txtYogi"
                  >
                    <span className="text-red-A400 font-yogi text-left text-[30px]">
                      {localStorage.getItem('new') ? `${localStorage.getItem('subsr')}` : `${localStorage.getItem('subsr')} `}
                    </span>
                    <span className="text-black-900 font-yogi text-left">
                      {localStorage.getItem('new') ? `님이 선택한 장르 기반 추천 ` : `님의 취향저격 장르 추천 `}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      {localStorage.getItem('new') ? `Genre` : `Genre `}
                    </span>
                  </Text>

                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[2%] md:w-full">
                  
                      <div className="video-container">
                        <HorizontalPosters rankposter={genposter} />
                      </div>
                  
                  </div>
                </div>
            </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start " style={{ marginTop: '50px' }}>
                  <Text
                    className="leading-[100.00px] pl-[50px] sm:text-[21px] md:text-[23px] text-[30px] text-black-900 tracking-[-0.13px] w-full font-lg1"
                    size="txtYogi"
                  >
                    <span className="text-red-A400 text-left font-yogi">
                      {localStorage.getItem('subsr')}
                    </span>
                    <span className="text-black-900 text-left font-yogi">
                      &nbsp;님을 위한 추천{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px]">
                      User{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-between pr-[100px] w-full">
                  
                 
                <div className="flex-shrink-0 h-[250px] relative w-1/6 md:w-full mb-[2%]">
                  
                    <div className="video-container">
                    <HorizontalPosters rankposter={userposter} />
                    </div>
                    
                  </div>
                </div>
              </div>
              {recposter !== null && recposter.length > 0 && (
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start" style={{ marginTop: '50px' }}>
                  <Text
                    className="leading-[100.00px] pl-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
                    size="txtYogi"
                  >
                    <span className="text-black-900 font-yogi text-left font-normal">
                    
                    최근 시청한&nbsp;
                    </span>
                    <span className="text-red-A400 font-yogi text-left font-normal text-[30px]">
                  
                    '{current}'&nbsp;
                    </span>
                    <span className="text-black-900 font-yogi text-left font-normal">
                    
                    VOD와 유사한&nbsp;
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      VOD{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-between pr-[100px] w-full">
                  
                 
                <div className="flex-shrink-0 h-[250px] relative w-1/6 md:w-full mb-[2%]">
                  
                    <div className="video-container">
                    <HorizontalPosters rankposter={recposter} />
                    </div>
                    
                  </div>
                </div>
              </div>
              )}
              {/* 드라마 추천 장소 */}
              {yetposter !== null && yetposter.length > 0 && (
              <div className="flex flex-1 flex-col items-start justify-start w-full pb-[200px]">
                <div className="flex flex-col items-center justify-start" style={{ marginTop: '50px' }}>
                  <Text
                    className="leading-[100.00px] pl-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
                    size="txtYogi"
                  >
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yogi text-left text-[50px] font-normal">
                    {localStorage.getItem('subsr')}&nbsp;
                    </span>
                    <span className="text-black-900 text-left font-yogi">
                     님이 시청중인{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      VOD{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-between pr-[100px] w-full">
                  
                 
                <div className="flex-shrink-0 h-[250px] relative w-1/6 md:w-full mb-[2%]">
                  
                    <div className="video-container">
                    <HorizontalPosters rankposter={yetposter} />
                    </div>
                    
                  </div>
                </div>
              </div>
              )}
            </div>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FamilyHomeLightPage;





// function VideoComponent() {
//   const [recommendations, setRecommendations] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://VOD-Recommendation-Backend-lb-642729755.ap-northeast-2.elb.amazonaws.com/vodrec');
//         setRecommendations(response.data);
//       } catch (error) {
//         // 에러 처리
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const scrollVideos = (direction) => {
//     const videoContainer = document.querySelector('.video-container');
//     const scrollAmount = 200; // 변경 가능: 스크롤할 양 조절
//     if (direction === 'left') {
//       videoContainer.scrollLeft -= scrollAmount;
//     } else if (direction === 'right') {
//       videoContainer.scrollLeft += scrollAmount;
//     }
//   };

//   return (
//     <div>
//       <div className="scroll-buttons">
//         <button className="scroll-button" onClick={() => scrollVideos('left')}>
//           ◀
//         </button>
//         <button className="scroll-button" onClick={() => scrollVideos('right')}>
//           ▶
//         </button>
//       </div>

//       <div className="video-container">
//         {recommendations.map((video, index) => (
//           <div className="video-item" key={index}>
//             {video[0] && video[1] && (
//               <a href={`/video_detail/${video[4]}`}>
//                 <img src={video[1]} alt={video[0]} />
//                 <h2>{video[0]}</h2>
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default VideoComponent;