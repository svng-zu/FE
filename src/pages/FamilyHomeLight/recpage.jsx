import React, { useState, useEffect } from 'react';

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Img, Text } from "components";
import { useRef } from 'react';

function FamilyHomeLightPage() {
  const [genposter, setGenposter] = useState([]);
  const [rankposter, setRankposter] = useState([]);
  const [userposter, setUserposter] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const access = localStorage.getItem('access_token');
        console.log('access token 1은', access);

        const response = await axios.get('https://hello00back.net/vodrec/', {
          headers: {
            "Authorization" : `Bearer ${access}`,
          }
        });

        
        const data = response.data.data;
        
        const selectedItems = data[0].slice(0, 10);
        const rankItems = data[1];
        const userItems = data[2].slice(0, 10);
        

        console.log(rankItems);

        const rankposter = rankItems.map(item => item[2]); //주간 랭킹
        const genposter = selectedItems.map(item => item[2]); // 장르별
        const userposter = userItems.map(item=> item[2]); // 사용자 개인
         
        console.log(genposter);
        // console.log(genposter);
        // 이후 사용하거나 반환할 때 활용
        setGenposter(genposter);
        setUserposter(userposter);
        setRankposter(rankposter);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const Click = () => {
    navigate('/Light')
  }
  // const Click = (programId) => {
  //   navigate(`/Light/${programId}`);
  // }
  // Component
  
  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '24px',
    outline: 'none',
    padding: '10px',
    color: '#555',
  };
  
  const HorizontalPosters = ({ rankposter }) => {
    const containerRef = useRef(null);
  
    const scrollTo = (scrollOffset) => {
      const container = containerRef.current;
      container.scrollLeft += scrollOffset;
    };
//   // {rankItems.map((item, index) => (
//   <img
//   key={index}
//   style={{ width: '300px', height: '450px', marginRight: '50px', border: '2px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
//   src={item[2]} // 이미지 URL
//   alt={`${index}`}
//   onClick={() => Click(item[1])} // program_id 전달
// />
//))}
    return (
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', marginRight: '-250px' }}>
        <button onClick={() => scrollTo(-200)} style={buttonStyle}>◀</button>
        <div style={{ display: 'flex', overflowX: 'auto', marginRight: '50px' }} ref={containerRef}>
          {rankposter.map((imageUrl, index) => (
            <img
              key={index}
              style={{ width: '300px', height: '450px', marginRight: '50px', border: '2px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
              src={imageUrl}
              alt={`${index}`}
              onClick={Click}
            />
          ))}
        </div>
        <button onClick={() => scrollTo(200)} style={buttonStyle}>▶</button>
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
              onClick={() => navigate(-1)}
            />
            <div className="h-[84px] md:ml-[0] ml-[1097px] md:px-5 relative w-[9%] md:w-full">
              <Text
                className="absolute bottom-[13%] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700_dd tracking-[-0.15px]"
                size="txtInterSemiBold30"
              >
                17°
              </Text>
              <Img
                className="absolute h-[84px] inset-y-[0] my-auto right-[0] w-[84px]"
                src="images/img_fluentweather.svg"
                alt="fluentweather"
              />
            </div>
            <Text
              className="ml-9 md:ml-[0] mr-[15px] md:mt-0 mt-[30px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[-0.16px]"
              size="txtInterSemiBold32"
            >
              16:11
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-abeezee md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[129px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="flex flex-col items-center justify-start mt-[29px] mx-auto w-[48%]">
                <div className="flex flex-col gap-[15px] items-start justify-start w-[74%] md:w-full">
                  <Img
                    className="h-[43px]"
                    src="images/img_search.svg"
                    alt="rewind"
                  />
                  <Text
                    className="ml-1 md:ml-[0] text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-2px]"
                    size="txtABeeZeeRegular22"
                  >
                    검색
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-col gap-2.5 items-center justify-start mt-[50px] w-full"
                  onClick={() => navigate("/frontpagelight")}
                >
                  <Img
                    className="h-[54px]"
                    src="images/img_home.svg"
                    alt="home"
                  />
                  <Text
                    className="text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtABeeZeeRegular22"
                  >
                    홈
                  </Text>
                </div>
                <div className="flex flex-col gap-[11px] items-center justify-start mt-14 w-full">
                  <Img
                    className="h-[50px]"
                    src="images/img_star.svg"
                    alt="star"
                  />
                  <Text
                    className="text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-3px]"
                    size="txtABeeZeeRegular22"
                  >
                    드라마
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start mt-[77px] w-[92%] md:w-full">
                  <Img
                    className="h-[50px]"
                    src="images/img_thumbsup.svg"
                    alt="lock"
                  />
                  <Text
                    className="text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtABeeZeeRegular22"
                  >
                    영화
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-center justify-start mt-[77px] mx-auto w-[63%]">
                <Img
                  className="h-[52px]"
                  src="images/img_thumbsup_gray_800.svg"
                  alt="thumbsup"
                />
                <Text
                  className="text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-3px]"
                  size="txtABeeZeeRegular22"
                >
                  시리즈물
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-center justify-start mb-[38px] mt-[66px] mx-auto w-[48%]">
                <Img
                  className="h-[42px]"
                  src="images/img_qrcode.svg"
                  alt="contrast"
                />
                <Text
                  className="text-[22px] text-center sm:text-lg text-red-A400 md:text-xl tracking-[-3px]"
                  size="txtABeeZeeRegular22RedA400"
                >
                  재추천
                </Text>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="leading-[100.00px] pl-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
                    size="txtABeeZeeRegular25"
                  >
                    <span className="text-black-900 font-abeezee text-left font-normal">
                      주간베스트{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Best
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-10 items-start justify-between w-full">
                    <HorizontalPosters rankposter={rankposter} />
                  <div className="h-[259px] md:ml-[0] ml-[50px] relative w-1/5 md:w-full">
                    <div>
                      <div className="video-container">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <List
                className="flex flex-col gap-[7px] items-center w-full"
                orientation="vertical"
              > */}
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="leading-[100.00px] pl-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
                    size="txtABeeZeeRegular25"
                  >
                    <span className="text-black-900 font-abeezee text-left font-normal">
                      장르 기반 추천{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Wow{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between m-0 pr-[200px] w-full">
                    {/* 이미지를 출력하는 장소 여기서는 장르 (장르 모델) */}
                    
                  <HorizontalPosters rankposter={genposter} />
                <div className="h-[259px] md:ml-[0] ml-[50px] relative w-1/5 md:w-full">
                  <div>
                    <div className="video-container">
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="leading-[100.00px] pl-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px] w-full"
                    size="txtABeeZeeRegular25"
                  >
                    <span className="text-black-900 font-abeezee text-left font-normal">
                      나를 위한 추천{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      For You{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between pr-[200px] w-full">
                  <HorizontalPosters rankposter={userposter} />
                    
                <div className="h-[259px] md:ml-[0] ml-[50px] relative w-1/5 md:w-full">
                  <div>
                    <div className="video-container">
                    </div>
                  </div>
                </div>
              </div>
            </div>
              {/* </List> */}
            </div>
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