import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LightPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    const win = window.open(
      "https://www.youtube.com/watch?v=Cmmux9XUKJo",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start mb-[42px] w-full">
          <div className="bg-red-A400 flex md:flex-col flex-row md:gap-5 items-start justify-end pb-1.5 px-1.5 w-full">
            <Img
              className="common-pointer h-[37px] mr-[130px] md:mt-0 mt-6"
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
          <div className="bg-gradient  flex flex-col items-start justify-end p-[45px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[43px] mt-[22px] w-[83%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[673px] md:h-auto object-cover rounded-[38px]"
                  src="images/img_image33.png"
                  alt="imagethirtythre"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 tracking-[-0.25px]"
                    size="txtInterBold50"
                  >
                    몬스터 주식회사 3D
                  </Text>
                  <Text
                    className="mt-[18px] text-white-A700 text-xl tracking-[-0.10px]"
                    size="txtInterSemiBold20"
                  >
                    2015, 한국, 15세, 드라마, 로맨스
                  </Text>
                  <Text
                    className="leading-[40.00px] mt-[51px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.12px]"
                    size="txtInterSemiBold24"
                  >
                    <>
                      출연
                      <br />
                      박채나,김은혜,공유경,황성주,김명현,고상희
                    </>
                  </Text>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[164px] mt-[77px] w-[181px]">
                    <Button
                      className="common-pointer cursor-pointer font-semibold h-[50px] text-center text-lg tracking-[-0.09px] w-[175px]"
                      onClick={handleNavigate}
                      shape="round"
                      color="red_A400"
                      size="lg"
                      variant="fill"
                    >
                      바로 시청하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1306px] mt-[55px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900 tracking-[-0.18px] w-[100px]"
              size="txtInterSemiBold35"
            >
              1화
            </Text>
            <Text
              className="leading-[50.00px] p-2.5 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.12px]"
              size="txtInterSemiBold24Bluegray900"
            >
              <span className="text-blue_gray-900 font-inter text-left font-semibold">
                {/*  */}
              </span>
              <span className="text-blue_gray-900 tracking-[-1.20px] font-inter text-left font-semibold">
                는
              </span>
              <span className="text-blue_gray-900 font-inter text-left font-semibold">
                {" "}
                절대로 안되는데...
              </span>
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.12px] w-[100px]"
              size="txtInterSemiBold24Bluegray900"
            >
              60분
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightPage;
