import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const SimplecookPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    const win = window.open("https://seasonmarket.co.kr/", "_blank");
    win.focus();
  }
  function handleNavigate7() {
    const win = window.open("https://seasonmarket.co.kr/", "_blank");
    win.focus();
  }

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto w-full">
        <header className="bg-red-A400 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="common-pointer h-[33px] mb-[31px] md:ml-[0] ml-[42px] md:mt-0 mt-[26px]"
            src="images/img_arrowdown.svg"
            alt="arrowdown"
            onClick={() => navigate(-1)}
          />
          <Text
            className="mb-[7px] md:ml-[0] ml-[381px] md:mt-0 mt-[13px] md:text-5xl text-6xl text-white-A700 tracking-[-0.30px]"
            size="txtYesevaOneRegular60"
          >
            SIMPLE MODE
          </Text>
          <div className="font-inter h-[82px] md:ml-[0] ml-[290px] md:mt-0 mt-2 relative w-[9%] md:w-full">
            <Text
              className="absolute bottom-[20%] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700_dd tracking-[-0.15px]"
              size="txtInterSemiBold30WhiteA700dd"
            >
              17°
            </Text>
            <Img
              className="absolute h-[82px] inset-y-[0] my-auto right-[0]"
              src="images/img_fluentweather_white_a700.svg"
              alt="fluentweather"
            />
          </div>
          <Text
            className="mb-5 ml-9 md:ml-[0] mr-[21px] md:mt-0 mt-[30px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[-0.16px]"
            size="txtInterSemiBold32"
          >
            16:11
          </Text>
        </header>
        <div className="flex flex-col items-center justify-start max-w-[1334px] mt-[62px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
            <Img
              className="common-pointer h-[218px] md:h-auto object-cover rounded-[55px]"
              src="images/img__218x261.png"
              alt="ten"
              onClick={handleNavigate6}
            />
            <div className="h-[216px] relative w-4/5 md:w-full">
              <Img
                className="h-[216px] m-auto object-cover rounded-[27px] w-full"
                src="images/img__216x1065.png"
                alt="eleven"
              />
              <Button
                className="common-pointer absolute bottom-[8%] cursor-pointer font-semibold h-[37px] left-[36%] rounded-[18px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.11px] w-[174px]"
                onClick={handleNavigate7}
                shape="round"
                color="white_A700_dd"
                size="xs"
                variant="fill"
              >
                바로 구매하기
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1303px] mt-[37px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-[45px] items-center justify-between w-full">
            <div className="h-[251px] relative w-[22%] md:w-full">
              <Img
                className="common-pointer h-[251px] m-auto object-cover rounded-[103px] w-full"
                src="images/img_1.png"
                alt="one"
                onClick={() => navigate("/simple")}
              />
              <Text
                className="absolute bottom-[12%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[-0.15px] w-max"
                size="txtInterSemiBold30"
              >
                #임영웅
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-14 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[76%] md:w-full"
              orientation="horizontal"
            >
              <div className="h-[255px] sm:ml-[0] relative w-full">
                <div
                  className="common-pointer bg-red-A400 border border-black-900 border-solid h-[255px] m-auto rounded-[145px] w-full"
                  onClick={() => navigate("")}
                ></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-center text-white-A700 tracking-[-0.18px] w-max"
                  size="txtInterBold35"
                >
                  건강/요리
                </Text>
              </div>
              <div className="h-[255px] sm:ml-[0] relative w-full">
                <div
                  className="common-pointer bg-white-A700 border-[3px] border-blue_gray-900 border-solid h-[255px] m-auto rounded-[145px] w-full"
                  onClick={() => navigate("/simpledrama")}
                ></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center tracking-[-0.18px] w-max"
                  size="txtInterSemiBold35"
                >
                  일일드라마
                </Text>
              </div>
              <div className="h-[255px] sm:ml-[0] relative w-full">
                <div
                  className="common-pointer bg-white-A700 border-[3px] border-blue_gray-900 border-solid h-[255px] m-auto rounded-[145px] w-full"
                  onClick={() => navigate("/simplenews")}
                ></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center tracking-[-0.18px] w-max"
                  size="txtInterSemiBold35"
                >
                  뉴스
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col justify-start max-w-[1341px] mt-16 mx-auto md:px-5 w-full">
          <Text
            className="md:ml-[0] ml-[5px] sm:text-[33px] md:text-[39px] text-[43px] text-black-900 tracking-[-0.21px]"
            size="txtInterSemiBold43"
          >
            건강 / 요리
          </Text>
          <div className="bg-gray-50 border border-black-900 border-solid flex flex-row items-center justify-start mt-[3px] pt-0.5 px-0.5 w-full">
            <div className="flex sm:flex-col flex-row gap-8 items-center justify-between w-[34%]">
              <Img
                className="h-[237px] md:h-auto object-cover"
                src="images/img_image3.png"
                alt="imagethree"
              />
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.20px]"
                  size="txtInterSemiBold40"
                >
                  미스터요리{" "}
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
    </>
  );
};

export default SimplecookPage;
