import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const SignupPageLightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter sm:gap-10 md:gap-10 gap-[138px] justify-start mx-auto pb-[120px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-red-A400 flex flex-col items-start justify-start p-6 sm:px-5 w-full">
            <Img
              className="common-pointer h-[37px] mb-[3px] md:ml-[0] ml-[17px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
              onClick={() => navigate(-1)}
            />
          </div>
          <Text
            className="leading-[50.00px] mt-[135px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.18px]"
            size="txtInterSemiBold36"
          >
            <span className="text-black-900 font-inter font-semibold">
              안녕하세요,{" "}
            </span>
            <span className="text-red-A400 font-inter font-semibold">
              65941000
            </span>
            <span className="text-black-900 font-inter font-semibold">
              <>
                {" "}
                님<br />
                선호하는 장르를 모두 골라주세요.{" "}
              </>
            </span>
          </Text>
          <div className="flex flex-col items-center justify-start max-w-[921px] mt-28 mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-full">
              <List
                className="flex flex-col gap-16 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                  <Button
                    className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[157px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    액션
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    코미디
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    로맨스
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    스릴러
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    SF 판타지
                  </Button>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[33px] items-center justify-between my-0 w-full">
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[157px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    시사교양
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    예능
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    스포츠
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    다큐
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                  >
                    애니메이션
                  </Button>
                </div>
              </List>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[59%] md:w-full">
                <Button
                  className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                  shape="round"
                  color="deep_orange_50_fc"
                  variant="fill"
                >
                  키즈
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[50px] sm:ml-[0] ml-[31px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                  shape="round"
                  color="deep_orange_50_fc"
                  variant="fill"
                >
                  게임
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[50px] sm:ml-[0] ml-[34px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                  shape="round"
                  color="deep_orange_50_fc"
                  variant="fill"
                >
                  성인
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[134px] w-full">
          <Button
            className="common-pointer cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
            onClick={() => navigate("/frontpagelight")}
            shape="round"
            color="red_A400"
            variant="fill"
          >
            완료
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignupPageLightPage;
