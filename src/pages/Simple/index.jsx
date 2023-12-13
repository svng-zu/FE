import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import 'styles/banner.css'; 

const SimplePage = () => {  
  const navigate = useNavigate();

  function handleNavigate4() {
    const win = window.open("https://seasonmarket.co.kr/", "_blank");
    win.focus();
  }
  function handleNavigate5() {
    const win = window.open("https://seasonmarket.co.kr/", "_blank");
    win.focus();
  }
  const imagenames = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg'
  ];
  // const images = imagenames.map(image => image);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenames.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [imagenames.length]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagenames.length) % imagenames.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenames.length);
  };
  
  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter sm:gap-10 md:gap-10 gap-[63px] items-center justify-start mx-auto w-full">
        <Header className="bg-red-A400 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1341px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
              <Img
                className="common-pointer h-[270px] md:h-auto object-cover rounded-[55px] mr-[-5%]"
                src="images/img__218x261.png"
                alt="one"
                onClick={handleNavigate4}
              />
                <div className="button-wrapper left mr-[-5%]">
                  <button className="left-button" onClick={handlePrevClick}>
                    <img src="https://seasonmarket.co.kr/img/slider_left.png" alt="Previous"/>
                  </button>
                </div>
                <div className="image-slider">

                <div className="image-wrapper">
                  {imagenames.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className={index === currentImageIndex ? 'active' : ''}
                      onClick={handleNavigate4}
                    />
                    ))}
                  </div>
                  </div>
                <div className="button-wrapper right ml-[-5%] mr-[5%]">
                  <button className="right-button" onClick={handleNextClick}>
                    <img src="https://seasonmarket.co.kr/img/slider_right.png" alt="Next"/>
                  </button>
                </div>
              
              

              </div>
              <Button
                  className="common-pointer relative cursor-pointer font-semibold h-[39px] left-[5%] text-[22px] mt-[-10%] text-center sm:text-lg md:text-xl tracking-[-0.11px] w-[174px] top-100 z-10"
                  onClick={handleNavigate5}
                  shape="round"
                  color="white_A700_dd"
                  size="xs"
                  variant="fill"
                >
                  바로 구매하기
                </Button>

            <div className="flex flex-col items-center justify-start w-[98%] md:w-full mt-[2%]">
              <div className="flex md:flex-col flex-row md:gap-[45px] items-center justify-between w-full">
                <div className="h-[251px] relative w-[22%] md:w-full">
                  <Img
                    className="h-[251px] m-auto mt-[10%] object-cover rounded-[103px] w-full"
                    src="images/img_1.png"
                    alt="onetwo"
                  />
                  <Text
                    className="absolute bottom-[11%] inset-x-[0] mx-auto sm:text-[31px] md:text-[33px] text-[40px] text-black-900 text-center tracking-[-0.18px] w-max"
                    size="txtInterSemiBold35"
                  >
                    노래듣기
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-14 mt-[5%] ml-[5%] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[76%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="h-[255px] sm:ml-[0] relative w-full">
                    <div
                      className="common-pointer bg-white-A700 border-[6px] border-blue_gray-900 border-solid h-[255px] m-auto rounded-[145px] w-full"
                      onClick={() => navigate("")}
                    ></div>
                    <Text
                      className="common-pointer absolute h-max inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[40px] text-black-900 text-center tracking-[-0.18px] w-max"
                      size="txtInterSemiBold35"
                      onClick={() => navigate("")}
                    >
                      건강/요리
                    </Text>
                  </div>
                  <div className="h-[255px] sm:ml-[0] relative w-full">
                    <div
                      className="common-pointer bg-white-A700 border-[6px] border-blue_gray-900 border-solid h-[255px] m-auto rounded-[145px] w-full"
                      onClick={() => navigate("")}
                    ></div>
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[40px] text-black-900 text-center tracking-[-0.18px] w-max"
                      size="txtInterSemiBold20"
                    >
                      일일드라마
                    </Text>
                  </div>
                  <div className="h-[255px] sm:ml-[0] relative w-full">
                    <div
                      className="common-pointer bg-white-A700 border-[6px] border-blue_gray-900 border-solid h-[255px] m-auto rounded-[145px] w-full"
                      onClick={() => navigate("")}
                    ></div>
                    <Text
                      className="common-pointer absolute h-max inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[40px] text-black-900 text-center tracking-[-0.18px] w-max"
                      size="txtInterSemiBold30"
                      onClick={() => navigate("")}
                    >
                      뉴스
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <Text
              className="md:ml-[0] ml-[5px] sm:text-[33px] md:text-[39px] text-[45px] text-black-900 tracking-[-0.18px]"
              size="txtInterSemiBold50"
            >
              노래 듣기
            </Text>
            <div className="bg-gray-50 border border-black-900 border-solid flex flex-row items-center justify-start mt-[3px] pt-0.5 px-0.5 mb-[10%] w-full">
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-between w-[34%]">
                <Img
                  className="h-[237px] md:h-auto object-cover"
                  src="images/img_image3.png"
                  alt="imagethree"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-3px]"
                    size="txtInterSemiBold40"
                  >
                    미스터트롯{" "}
                  </Text>
                  <Text
                    className="mt-[30px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.15px]"
                    size="txtInterSemiBold30"
                  >
                    출연진 정보
                  </Text>
                  <Text
                    className="mt-[15px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.15px]"
                    size="txtInterSemiBold30"
                  >
                    상세 설명
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimplePage;
