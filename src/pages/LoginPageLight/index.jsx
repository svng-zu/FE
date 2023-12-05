import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import C1LoginPageLightIdinput from "components/C1LoginPageLightIdinput";

const LoginPageLightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter sm:gap-10 md:gap-10 gap-[171px] items-center justify-start mx-auto pb-[205px] w-full">
        <div className="bg-red-A400 h-[90px] w-full"></div>
        <div className="md:h-[457px] h-[558px] md:px-5 relative w-[57%] md:w-full">
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto outline outline-[1px] outline-white-A700_4c p-[61px] md:px-10 sm:px-5 rounded-[40px] shadow-bs w-full">
            <C1LoginPageLightIdinput className="flex flex-col h-[124px] md:h-auto items-start justify-start max-w-[696px] mt-[109px] w-full" />
            <div className="flex flex-col items-start justify-start mt-0.5 w-auto">
              <Button
                className="common-pointer cursor-pointer font-semibold h-[50px] text-center text-lg tracking-[-0.09px] w-[175px]"
                onClick={() => navigate("/frontpagelight")}
                shape="round"
                color="blue_gray_100"
                size="lg"
                variant="fill"
              >
                로그인
              </Button>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer mb-[63px] min-w-[113px] mt-4 text-[15px] text-black-900 text-center tracking-[0.16px]"
              onClick={() => navigate("/signuppagelight")}
              size="xs"
            >
              회원이 아니라면?
            </Button>
          </div>
          <Img
            className="absolute inset-x-[0] mx-auto object-cover top-[0] w-[300px]"
            src="images/img_hello.png"
            alt="hello"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPageLightPage;
