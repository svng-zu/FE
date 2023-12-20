import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Img, Weather, Button, TimeComponent, VideoList } from "components";
import axios from 'axios';

const Simplemode = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  localStorage.setItem('page', 4);
  const fetchData = async (buttonId) => {
    try {
      if (buttonId !== null){
      const response = await axios.get(`https://hello00back.net/vodrec_simple/${buttonId}`);
      if (response.status === 200) {
        setData(response.data.data);

      }

    }

    
    
    }catch (error) {
      console.error('Error fetching data:', error);
  
  
  }
  };
  console.log(data);
  useEffect(() => {
    fetchData(selectedButton);

  }, [selectedButton]);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  let buttonContent;
  if (selectedButton === 1) {
    buttonContent = '트로트 추천';
  } else if (selectedButton === 2) {
    buttonContent = '건강과 요리 프로그램 추천';
  } else if (selectedButton === 3) {
    buttonContent = '일일 드라마 추천';
  }
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="sm:h-[1023px] h-[1118px] md:h-[2322px] md:px-5 relative w-full">
          <div className="absolute bg-gray-100 border border-black-900 border-solid flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[171px] top-[0] w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start w-full">
            <div className="z-10 !sticky top-[0] overflow-block relative flex bg-red-A400 flex md:flex-col flex-row md:gap-5 items-start justify-end pb-1.5 px-1.5 w-full">
            <Img
              className="button common-pointer absolute h-[45px] w-[45px] left-5 md:mt-0 mt-[26px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
              onClick={() => navigate('/frontpagelight')}
            />
            <Text className="absolute font-yogi font-lighter left-[10%] mt-[2%] md:text-2xl text-2xl text-white-A700 tracking-[-0.30px]">
              HELLO 00
            </Text>
            <Text className="absolute font-yogi font-lighter left-[43%] mt-[1.7%] md:text-3xl text-4xl text-white-A700 tracking-[-0.30px]">
              SIMPLE MODE
            </Text>
            <div className="relative h-[80px] w-[13%] mr-[1%] mt-[4px] w-[15%] md:w-full">
              <Weather />
            </div>
            <div
              className="ml-9 md:ml-[0] mr-[2%] md:mt-0 mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[-0.16px]"
              size="txtInterSemiBold32"
            >
              <TimeComponent/>
            </div>
          </div>
              <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  
                  <button className="bg-blue-100 flex md:flex-1 flex-col md:gap-10 gap-[142px] items-center justify-start mr-[2%] p-[18px] rounded-[47px] w-1/4 md:w-full"
                  onClick={() => handleButtonClick(1)}>
                    <Text
                      className="mt-[11px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 tracking-[-0.18px] font-yogi"
                      
                    >
                      트로트
                    </Text>
                    <Img
                      className="h-[91px] w-[100%] sm:h-auto mb-[29px] object-cover w-full"
                      src="images/img_image41.png"
                      alt="imageFortyOne"
                    />
                  </button>
                  <button className="bg-amber-200 flex md:flex-1 flex-col md:gap-10 gap-[76px] items-center justify-start mr-[2%]  p-[18px] rounded-[47px] w-1/4 md:w-full"
                  onClick={() => handleButtonClick(2)}>
                    
                    <Text
                      className="mt-3 sm:text-[31px] font-yogi md:text-[33px] text-[35px] text-black-900 tracking-[-0.18px]"
                      
                    >
                      건강/요리
                    </Text>
                    <Img
                      className="h-[189px] md:h-auto object-cover w-[65%] sm:w-full"
                      src="images/img_20231218.png"
                      alt="20231218"
                    />
                  </button>
                  <div className="bg-orange-100 flex md:flex-1 flex-col gap-[39px] items-center justify-end p-[18px] mr-[2%]  rounded-[47px] w-1/4 md:w-full"
                  onClick={() => handleButtonClick(3)}>
                    <Text
                      className="mt-3 sm:text-[31px] font-yogi md:text-[33px] text-[35px] text-black-900 tracking-[-0.18px]"
                      
                    >
                      일일드라마
                    </Text>
                    <Img
                      className="h-[226px] md:h-auto object-cover w-[78%] sm:w-full"
                      src="images/img_m021t0206dtv.png"
                      alt="m021t0206dtv"
                    />
                  </div>
                  <div className="h-[340px] relative w-1/4 md:w-full">
                    <div className="h-[340px] m-auto w-full">
                      <Img
                        className="h-[340px] m-auto object-cover rounded-[47px] w-full"
                        src="images/img_rectangle198.png"
                        alt="rectangle198"
                      />
                      <div className="absolute bottom-[5%] flex flex-col md:gap-10 gap-[170px] inset-x-[0] justify-center mx-auto w-[90%]">
                      <div className="bg-opacity-30">
                        <Text
                          className="absolute bg-gray-500  left-[5%] mt-[-17%] bg-opacity-50 md:ml-[0] sm:text-[17px] p-[5px] md:text-[19px] text-[21px] font-yogi text-white-A700 tracking-[-0.10px]"
                          size="yogi"
                        >
                          오늘처럼 추운날.. <br/> 간식으로 군구마는 어때요?
                        </Text>

                      </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <Img
                            className="h-[90px] md:h-auto object-cover rounded-[44px] w-[89px]"
                            src="images/wpcjf.png"
                            alt="Five"
                          />
                          <Button className="bg-gray-500 bg-opacity-50 cursor-pointer font-yogi h-[40px] mb-[10px] mt-[41px] text-[22px] text-white-A700 text-center sm:text-lg md:text-xl tracking-[-0.11px] w-[174px]">
                            바로 구매하기
                          </Button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div>
                <Text
                  className="mt-[20%] mb-[10%] sm:text-[33px] md:text-[39px] font-yogi text-[43px] text-black-900 tracking-[-0.21px]"

                >
                  {buttonContent}
                </Text>
                </div>
                <div className='w-full'>
                 <VideoList data={data}></VideoList>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Simplemode;
