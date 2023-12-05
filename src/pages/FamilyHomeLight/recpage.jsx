import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Img, List, Text } from "components";

const FamilyHomeLightPage = () => {
  const navigate = useNavigate();


  const FrontRec = async () => {
    try{
      const response = await axios.get('127.0.0.1:8000/rec')

    }
    catch (error){

    }
  }


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
                  <div className="h-[259px] md:ml-[0] ml-[50px] relative w-1/5 md:w-full">
                    <Img
                      className="h-[102%] mt-auto mx-auto object-cover w-full"
                      src="images/img_image30.png"
                      alt="imagethirty"
                    />
                    <Text
                      className="absolute bottom-[0] left-[0] md:text-5xl text-[100px] text-center text-shadow-ts text-white-A700 tracking-[-0.50px]"
                      size="txtPaytoneOneRegular100"
                    >
                      1
                    </Text>
                  </div>
                  <div className="h-[228px] md:mt-0 mt-9 relative w-[19%] md:w-full">
                    <Img
                      className="common-pointer h-full m-auto object-cover static w-full"
                      src="images/img_image31.png"
                      alt="imagethirtyone"
                      onClick={() => navigate("/light")}
                    />
                    <Text
                      className="absolute bottom-[0] left-[0] md:text-5xl text-[80px] text-center text-shadow-ts text-white-A700 tracking-[-0.40px]"
                      size="txtPaytoneOneRegular80"
                    >
                      2
                    </Text>
                  </div>
                  <div className="h-[228px] md:mt-0 mt-9 relative w-[19%] md:w-full">
                    <Img
                      className="h-full m-auto object-cover w-full"
                      src="images/img_image32.png"
                      alt="imagethirtytwo"
                    />
                    <Text
                      className="absolute bottom-[0] left-[0] md:text-5xl text-[80px] text-center text-shadow-ts text-white-A700 tracking-[-0.40px]"
                      size="txtPaytoneOneRegular80"
                    >
                      3
                    </Text>
                  </div>
                  <div className="h-[228px] md:mt-0 mt-9 relative w-[19%] md:w-full">
                    <Img
                      className="h-full inset-[0] justify-center m-auto object-cover static w-full"
                      src="images/img_image31.png"
                      alt="imagethirtythre"
                    />
                    <Text
                      className="absolute bottom-[0] left-[0] md:text-5xl text-[80px] text-center text-shadow-ts text-white-A700 tracking-[-0.40px]"
                      size="txtPaytoneOneRegular80"
                    >
                      4
                    </Text>
                  </div>
                  <div className="h-[228px] md:mt-0 mt-9 relative w-[19%] md:w-full">
                    <Img
                      className="h-full m-auto object-cover w-full"
                      src="images/img_image32.png"
                      alt="imagethirtyfour"
                    />
                    <Text
                      className="absolute bottom-[0] left-[0] md:text-5xl text-[80px] text-center text-shadow-ts text-white-A700 tracking-[-0.40px]"
                      size="txtPaytoneOneRegular80"
                    >
                      {" "}
                      5
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-[7px] items-center w-full"
                orientation="vertical"
              >
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
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between m-0 pr-[200px] w-full">
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto mb-[3px] md:ml-[0] ml-[50px] md:mt-0 my-[3px] object-cover w-[200px] sm:w-full"
                      src="images/img_image30.png"
                      alt="imagethirty"
                    />
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto md:mt-0 my-[3px] object-cover w-[200px] sm:w-full"
                      src="images/img_image28.png"
                      alt="imagetwentyeigh"
                    />
                    <Img
                      className="common-pointer sm:flex-1 h-[235px] md:h-auto md:mt-0 mt-[7px] object-cover w-[200px] sm:w-full"
                      src="images/img_image31.png"
                      alt="imagethirtyone"
                      onClick={() => navigate("/light")}
                    />
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto md:mt-0 my-[3px] object-cover w-[200px] sm:w-full"
                      src="images/img_image32.png"
                      alt="imagethirtytwo"
                    />
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto md:mt-0 my-[3px] object-cover w-[200px] sm:w-full"
                      src="images/img_image31.png"
                      alt="imagethirtythre"
                    />
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto mb-[7px] object-cover w-[200px] sm:w-full"
                      src="images/img_image32.png"
                      alt="imagethirtyfour"
                    />
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
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between pl-[60px] pr-[200px] w-full">
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto md:mt-0 mt-2 object-cover w-[200px] sm:w-full"
                      src="images/img_image5.png"
                      alt="imagefive"
                    />
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto md:mt-0 mt-2 object-cover w-[200px] sm:w-full"
                      src="images/img_image30.png"
                      alt="imagethirty"
                    />
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto md:mt-0 mt-2 object-cover w-[200px] sm:w-full"
                      src="images/img_image31.png"
                      alt="imagethirtyone"
                    />
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto md:mt-0 my-1 object-cover w-[200px] sm:w-full"
                      src="images/img_image32.png"
                      alt="imagethirtytwo"
                    />
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto md:mt-0 my-1 object-cover w-[200px] sm:w-full"
                      src="images/img_image31.png"
                      alt="imagethirtythre"
                    />
                    <Img
                      className="sm:flex-1 h-[235px] md:h-auto mb-2 object-cover w-[200px] sm:w-full"
                      src="images/img_image32.png"
                      alt="imagethirtyfour"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyHomeLightPage;
