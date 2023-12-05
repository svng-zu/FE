import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const SilverclubLightPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    const win = window.open("https://seasonmarket.co.kr/", "_blank");
    win.focus();
  }

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto pb-[3px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-red-A400 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="common-pointer absolute h-[33px] left-[5px] mb-[27px] md:ml-[0] ml-[42px] md:mt-0 mt-[30px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
              onClick={() => navigate(-1)}
            />
            <div className="h-[82px] md:ml-[0] ml-[1103px] md:mt-0 mt-2 relative w-[9%] md:w-full">
              <Text
                className="absolute bottom-[20%] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700_dd tracking-[-0.15px]"
                size="txtInterSemiBold30"
              >
                17°
              </Text>
              <Img
                className="absolute h-[82px] inset-y-[0] my-auto right-[0]"
                src="images/img_fluentweather.svg"
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
          <div className="flex md:flex-col flex-row font-abeezee gap-[51px] items-end justify-start ml-1 md:ml-[0] md:px-5 w-[96%] md:w-full">
            <div className="bg-gray-50 flex flex-col items-center justify-end p-[19px] w-[9%] md:w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start mt-[47px] w-[65%] md:w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start w-4/5 md:w-full">
                  <Img
                    className="h-10 w-[39px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                  <Text
                    className="text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtABeeZeeRegular22"
                  >
                    검색
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-col gap-3 items-center justify-start w-full"
                  onClick={() => navigate("/frontpagelight")}
                >
                  <Img
                    className="h-[51px]"
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
              </div>
              <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start mt-[49px] w-3/4 md:w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <Img
                    className="h-[47px]"
                    src="images/img_star.svg"
                    alt="star"
                  />
                  <Text
                    className="text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtABeeZeeRegular22"
                  >
                    드라마
                  </Text>
                </div>
                <div className="flex flex-col gap-[11px] items-center justify-start w-[82%] md:w-full">
                  <Img
                    className="h-[47px]"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-0.11px]"
                    size="txtABeeZeeRegular22"
                  >
                    영화
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start mt-[69px] w-[99%] md:w-full">
                <Img
                  className="h-[49px] w-12"
                  src="images/img_thumbsup_gray_800.svg"
                  alt="thumbsup_One"
                />
                <Text
                  className="text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[-1px]"
                  size="txtABeeZeeRegular22"
                >
                  시리즈물
                </Text>
              </div>
              <div className="flex flex-col gap-[19px] items-center justify-start mb-[18px] mt-[68px] w-3/4 md:w-full">
                <Img
                  className="h-[39px]"
                  src="images/img_qrcode.svg"
                  alt="qrcode"
                />
                <Text
                  className="text-[22px] text-center sm:text-lg text-red-A400 md:text-xl tracking-[-0.11px]"
                  size="txtABeeZeeRegular22RedA400"
                >
                  재추천
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-yesevaone items-center justify-start mb-0.5 md:mt-0 mt-[39px] w-[88%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="ml-1 md:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 tracking-[-0.18px]"
                    size="txtYesevaOneRegular35"
                  >
                    SILVER CLUB
                  </Text>
                  <div className="flex md:flex-col flex-row font-inter gap-1.5 items-center justify-between w-full">
                    <Img
                      className="h-[218px] md:h-auto object-cover rounded-[55px]"
                      src="images/img__218x235.png"
                      alt="Seven"
                    />
                    <div className="h-[216px] relative w-4/5 md:w-full">
                      <Img
                        className="h-[216px] m-auto object-cover rounded-[27px] w-full"
                        src="images/img__216x959.png"
                        alt="Eight"
                      />
                      <Button
                        className="common-pointer absolute bottom-[8%] cursor-pointer font-semibold h-[37px] left-[36%] rounded-[18px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.11px] w-[156px]"
                        onClick={handleNavigate1}
                        color="white_A700_dd"
                        size="sm"
                        variant="fill"
                      >
                        바로 구매하기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-inter gap-[9px] items-start justify-start mt-[30px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.15px]"
                  size="txtInterSemiBold30Black900"
                >
                  음악이 필요한 오전 8시엔?
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] w-full">
                  <div className="h-[229px] relative w-[21%] md:w-full">
                    <Img
                      className="h-[229px] m-auto object-cover rounded-[103px] w-full"
                      src="images/img_1.png"
                      alt="One_Two"
                    />
                    <Text
                      className="absolute bottom-[15%] inset-x-[0] mx-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.14px] w-max"
                      size="txtInterSemiBold28"
                    >
                      #임영웅
                    </Text>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[52px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="h-[257px] sm:ml-[0] relative w-full">
                      <div className="bg-blue_gray-100_01 h-[257px] m-auto rounded-[131px] w-full"></div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.14px] w-max"
                        size="txtInterSemiBold28"
                      >
                        #트로트
                      </Text>
                    </div>
                    <div className="h-[257px] sm:ml-[0] relative w-full">
                      <div className="bg-blue_gray-100_01 h-[257px] m-auto rounded-[131px] w-full"></div>
                      <Text
                        className="absolute h-max inset-y-[0] left-[16%] my-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.14px]"
                        size="txtInterSemiBold28"
                      >
                        # 헬로TV뉴스
                      </Text>
                    </div>
                    <div className="h-[257px] sm:ml-[0] relative w-full">
                      <div className="bg-blue_gray-100_01 h-[257px] m-auto rounded-[131px] w-full"></div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.14px] w-max"
                        size="txtInterSemiBold28"
                      >
                        #현재 방송 중
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col font-inter gap-[7px] items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.15px]"
                  size="txtInterSemiBold30Black900"
                >
                  노래 듣기
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[239px] md:h-auto object-cover"
                    src="images/img_image3.png"
                    alt="imageThree"
                  />
                  <Img
                    className="h-[239px] md:h-auto object-cover"
                    src="images/img_image4.png"
                    alt="imageFour"
                  />
                  <Img
                    className="h-[239px] md:h-auto object-cover"
                    src="images/img_image5.png"
                    alt="imageFive"
                  />
                  <Img
                    className="h-[239px] md:h-auto object-cover"
                    src="images/img_image6.png"
                    alt="imageSix"
                  />
                  <Img
                    className="h-[239px] md:h-auto object-cover"
                    src="images/img_image6.png"
                    alt="imageSeven"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SilverclubLightPage;
