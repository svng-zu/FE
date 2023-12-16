import React, { useState, useEffect } from 'react';
import 'styles/animation.css'
import { Sidebar } from "react-pro-sidebar";
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Img, Text, TimeComponent, Weather, Ranklist, Reclist } from "components";
import 'styles/loading.css';
import 'styles/font.css'
import 'styles/img.css'
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
  const initialStartIndex = localStorage.getItem('startIndex');
  const initialIndex = initialStartIndex !== null ? parseInt(initialStartIndex) : 0;
  const [startIndex, setStartIndex] = useState(initialIndex);
  const [userposter, setUserposter] = useState([]);
  const [showPage, setShowPage] = useState(false);
  localStorage.setItem('page', 0);
  const navigate = useNavigate();

  useEffect(() => {
    setShowPage(true);
  }, []);

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
  
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Component
  

  return (
    <>
      <CSSTransition
        in={showPage}
        timeout={1500}
        classNames="fade"
       unmountOnExit
      >
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-red-A400 flex md:flex-col flex-row md:gap-5 items-start justify-end pb-1.5 px-1.5 w-full">
            <Img
              className="button common-pointer absolute h-[45px] w-[45px] left-10 md:mt-0 mt-[26px]"
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
            <Sidebar className="!sticky !w-[120px] bg-gray-50 flex h-screen justify-start overflow-auto top-[0]">
              <div className="flex flex-col items-center justify-start mt-[29px] mx-auto w-[48%]">
                <div className="flex flex-col gap-[15px] items-start justify-start w-[74%] md:w-full">
                  <Img
                    className="h-[45px] button"
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
                  onClick={handleClick}
                >
                  <Img
                    className="h-[45px] button"
                    src="images/img_home.svg"
                    alt="home"
                  />
                  <Text
                    className="text-[20px] text-center font-yogi text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtYogi"
                  >
                    홈
                  </Text>
                </div>
                <div className="flex flex-col gap-[11px] items-center justify-start mt-[55px] w-full">
                  <Img
                    className="h-[45px] button"
                    src="images/img_star.svg"
                    alt="star"
                    onClick={()=> navigate("/familyhomelight/drama")}
                  />
                  <Text
                    className="text-[20px] text-center font-yogi text-gray-800 md:text-xl tracking-[-2px]"
                    size="txtYogi"
                    onClick={()=> navigate("/familyhomelight/drama")}
                  >
                    드라마
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start mt-[55px] w-[92%] md:w-full">
                  <Img
                    className="h-[45px] button"
                    src="images/img_thumbsup.svg"
                    alt="lock"
                    onClick={()=> navigate("/familyhomelight/movie")}
                  />
                  <Text
                    className="text-[20px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtYogi"
                    onClick={()=> navigate("/familyhomelight/drama")}
                  >
                    영화
                  </Text>
                </div>
              </div>

              <div className="flex flex-col gap-[17px] items-center justify-start mb-[38px] mt-[55px] mx-auto w-[48%]">
                <Img
                  className="h-[45px] button"
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
                  
              <div className="flex flex-1 flex-col items-start justify-start w-full mb-[10%]">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start" style={{ marginTop: '5%' }}>
                  <Text
                    className="leading-[10.00px] ml-[5%] pl-[50px] sm:text-[21px] md:text-[23px] text-[30px] text-black-900 tracking-[-0.13px] w-full font-yogi"
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
                  <div className="flex-shrink-0 h-[350px] relative w-1/6 mr-[10%] mb-[2%] md:w-full mt-[0%]">
                  
                      <div className="video-container">
                        <Ranklist rankposter={rankposter} />
                      </div>
                  
                  </div>
                </div>
            </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start" style={{ marginTop: '-2%' }}>
                  <Text
                    className="leading-[100.00px] mb-[-4%] ml-[3%] pl-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
                    size="txtYogi"
                  >
                    <span className="text-black-900 font-yogi text-left">
                      {localStorage.getItem('new') ? `당신의 선택한 장르 기반 추천 ` : `당신의 취향저격 장르 추천 `}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      {localStorage.getItem('new') ? `Genre` : `Genre `}
                    </span>
                  </Text>

                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[2%] md:w-full">
                  
                      <div className="video-container">
                        <Reclist rankposter={genposter} />
                      </div>
                  
                  </div>
                </div>
            </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start " style={{ marginTop: '-2%' }}>
                  <Text
                    className="leading-[100.00px] ml-[3%] pl-[50px] mb-[-4%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
                    size="txtYogi"
                  >
                    <span className="text-black-900 text-left font-yogi">
                      당신과 비슷한 유저들이 즐겨봐요{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px]">
                      User{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-between pr-[100px] w-full">
                  
                 
                <div className="flex-shrink-0 h-[250px] relative w-1/6 md:w-full mb-[2%]">
                  
                    <div className="video-container">
                    <Reclist rankposter={userposter} />
                    </div>
                    
                  </div>
                </div>
              </div>
              {recposter !== null && recposter.length > 0 && (
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start" style={{ marginTop: '-2%' }}>
                  <Text
                    className="leading-[100.00px] ml-[3%] pl-[50px] mb-[-4%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
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
                    <Reclist rankposter={recposter} />
                    </div>
                    
                  </div>
                </div>
              </div>
              )}
              {/* 드라마 추천 장소 */}
              {yetposter !== null && yetposter.length > 0 && (
              <div className="flex flex-1 flex-col items-start justify-start w-full pb-[200px]">
                <div className="flex flex-col items-center justify-start" style={{ marginTop: '-2%' }}>
                  <Text
                    className="leading-[100.00px] pl-[50px] mb-[-4%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
                    size="txtYogi"
                  >
                    <span className="md:text-[25px] sm:text-[25px] text-red-A400 font-yogi text-left text-[30px] font-normal">
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
                    <Reclist rankposter={yetposter} />
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
      </CSSTransition>
    </>
  );
};

export default FamilyHomeLightPage;





