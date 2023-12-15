import React, { useState, useEffect } from 'react';
import 'styles/animation.css'
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Img, Text, TimeComponent, Weather, Reclist, Ranklist } from "components";
import { CSSTransition } from 'react-transition-group';
import 'styles/loading.css';
import 'styles/font.css'


const LoadingScreen = () => {
    return (
        <div className='lodaing-screen'>
            
            <img src='/images/spinner.gif' alt='로딩 중' />
        </div>
        );
    };
 

function MoviePage() {
  const [loading, setLoading] = useState(true);
  const [rankposter, setRankposter] = useState([]);
  const [ctcl1, setCtcl1] = useState([]);
  const [ctcl2, setCtcl2] = useState([]);
  const [ctcl3, setCtcl3] = useState([]);
  const [ctcl4, setCtcl4] = useState([]);
  const [ctcl5, setCtcl5] = useState([]);
  const [ctcl6, setCtcl6] = useState([]);
  const [ctcl7, setCtcl7] = useState([]);
  const [ctclname, setCtclname] = useState([]);

 
  // const [startIndex, setStartIndex] = useState(localStorage.getItem('startIndex'));
  localStorage.setItem('page', 1);
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowPage(true);
  }, []);

  useEffect(() => {


  
    const fetchData = async () => {
      try{
        const access = localStorage.getItem('access_token');
        if (!access) {
          navigate('/');
          return; // 로그인 페이지로 이동 후 함수 종료
        }
      

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

        
        
        const response = await axios.get('https://hello00back.net/home/movie', {
          headers: {
            Authorization : access,
          },
    


      });

      
        if (response.status === 200) {

        
          const data = response.data.data; //포스터 데이터
          const rankItems = data[0];
          const ctcl1Items = data[1][0];
          const ctcl2Items = data[1][1];
          const ctcl3Items = data[1][2];
          const ctcl4Items = data[1][3];
          const ctcl5Items = data[1][4];
          const ctcl6Items = data[1][5];
          const ctcl7Items = data[1][6];
          console.log(response.data);
          const ctclnames = response.data.genres; //장르 데이터



          const rankposter = rankItems.map(item => item); 
          const ctcl1 = ctcl1Items.map(item => item); 
          const ctcl2 = ctcl2Items.map(item=> item);
          const ctcl3 = ctcl3Items.map(item=> item); 
          const ctcl4 = ctcl4Items.map(item=> item);
          const ctcl5 = ctcl5Items.map(item=> item); 
          const ctcl6 = ctcl6Items.map(item=> item);
          const ctcl7 = ctcl7Items.map(item=> item); 
          const ctclname = ctclnames;
          console.log(ctclnames);
          setRankposter(rankposter);
          setCtcl1(ctcl1);
          setCtcl2(ctcl2);
          setCtcl3(ctcl3);
          setCtcl4(ctcl4);
          setCtcl5(ctcl5);
          setCtcl6(ctcl6);
          setCtcl7(ctcl7);
          setCtclname(ctclname);

          setLoading(false);
        }

      
      } catch (error) {
        let loadingTimer = setTimeout(() => {
          setLoading(false); // 10초 후에 로딩 완료
          // 실패 로직 필요시 추가
          clearTimeout(loadingTimer); // 타이머 초기화
        }, 10000);
        console.error('Error 실패:', error);
      }
      
      
    };

    fetchData();
  }, [navigate]);

  
  // const handleClick = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

///기존에 사용했던 컴포넌트 부분
 


  

  return (
    <>
      <CSSTransition
        in={showPage}
        timeout={4000}
        classNames="fade"
       unmountOnExit
      >
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-red-A400 flex md:flex-col flex-row md:gap-5 items-start justify-end pb-1.5 px-1.5 w-full">
            <Img
              className="button common-pointer absolute h-[33px] left-10 md:mt-0 mt-[26px]"
              src="/images/img_arrowdown.svg"
              alt="arrowdown"
              onClick={() => navigate('/FamilyHomeLight')}
            />
            <div className="relative h-[80px] w-[16%] mr-[2%] mt-[0.5%] md:w-full">
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
                    className="button h-[45px]"
                    src="/images/img_search.svg"
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
                  onClick={() => navigate('/FamilyHomeLight')}
                >
                  <Img
                    className="button h-[45px]"
                    src="/images/img_home.svg"
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
                    className="button h-[45px]"
                    src="/images/img_star.svg"
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
                    className="button h-[45px]"
                    src="/images/img_thumbsup.svg"
                    alt="lock"
                    onClick={()=> navigate("/familyhomelight/movie")}
                  />
                  <Text
                    className="text-[20px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtYogi"
                    onClick={()=> navigate("/familyhomelight/movie")}
                  >
                    영화
                  </Text>
                </div>
              </div>

              <div className="flex flex-col gap-[17px] items-center justify-start mb-[38px] mt-[55px] mx-auto w-[48%]">
                <Img
                  className="button h-[45px]"
                  src="/images/img_qrcode.svg"
                  alt="contrast"
                  
                />
                <Text
                  className="text-[20px] text-center sm:text-lg text-red-A400 md:text-xl tracking-[-2px]"
                  size="txtYogi"
                  
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
                <div className="flex flex-col items-center justify-start" style={{ marginTop: '3%' }}>
                  <Text
                    className="leading-[10.00px] pl-[50px] sm:text-[21px] md:text-[23px] text-[30px] text-black-900 tracking-[-0.13px] w-full font-yogi"
                    size="txtYogi"
                  >
                    <span className="text-black-900 font-yogi text-left">
                      주간 영화 베스트{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Ranking{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[450px] relative w-1/6 mr-[10%] mb-[2%] md:w-full mt-[1.5%]">
                  
                      <div className="video-container">
                        <Ranklist rankposter={rankposter} />
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
                    <span className="text-black-900 font-yogi text-left">
                      {ctclname[0]} 장르 영화{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Best{" "}
                    </span>
                  </Text>

                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[2%] md:w-full">
                  
                      <div className="video-container">
                        <Reclist rankposter={ctcl1} />
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
                    <span className="text-black-900 font-yogi text-left">
                      {ctclname[1]} 장르 영화{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Best{" "}
                    </span>
                  </Text>

                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[2%] md:w-full">
                  
                      <div className="video-container">
                        <Reclist rankposter={ctcl2} />
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
                    <span className="text-black-900 font-yogi text-left">
                      {ctclname[2]} 장르 영화{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Best{" "}
                    </span>
                  </Text>

                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[2%] md:w-full">
                  
                      <div className="video-container">
                        <Reclist rankposter={ctcl3} />
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
                    <span className="text-black-900 font-yogi text-left">
                      {ctclname[3]} 장르 영화{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Best{" "}
                    </span>
                  </Text>

                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[2%] md:w-full">
                  
                      <div className="video-container">
                        <Reclist rankposter={ctcl4} />
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
                    <span className="text-black-900 font-yogi text-left">
                      {ctclname[4]} 장르 영화{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Best{" "}
                    </span>
                  </Text>

                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[2%] md:w-full">
                  
                      <div className="video-container">
                        <Reclist rankposter={ctcl5} />
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
                    <span className="text-black-900 font-yogi text-left">
                      {ctclname[5]} 장르 영화{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Best{" "}
                    </span>
                  </Text>

                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[2%] md:w-full">
                  
                      <div className="video-container">
                        <Reclist rankposter={ctcl6} />
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
                    <span className="text-black-900 font-yogi text-left">
                      {ctclname[6]} 장르 영화{" "}
                    </span>
                    <span className="md:text-[46px] sm:text-[40px] text-red-A400 font-yellowtail text-left text-[50px] font-normal">
                      Best{" "}
                    </span>
                  </Text>

                </div>
                <div className="flex md:flex-col flex-row font-paytoneone md:gap-5 items-start justify-between pr-[100px] w-full">                                  
                  <div className="flex-shrink-0 h-[250px] relative w-1/6 mr-[10%] mb-[10%] md:w-full">
                  
                      <div className="video-container">
                        <Reclist rankposter={ctcl7} />
                      </div>
                  
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
      </CSSTransition>
    </>
  );
};

export default MoviePage ;






