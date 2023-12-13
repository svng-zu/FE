import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text, TimeComponent } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[33px] mb-[27px] ml-[0] md:mt-0 mt-[30px]"

          src="images/img_arrowdown.svg"
          alt="arrowdown"
          onClick={() => navigate('/FrontpageLight')}
        />
        <Text
          className="mb-[3px] md:ml-[0] ml-[381px] md:mt-0 mt-[17px] md:text-5xl text-6xl text-white-A700 tracking-[-0.30px]"
          size="txtYesevaOneRegular60"
        >
          SIMPLE MODE
        </Text>
        <div className="h-[82px] md:ml-[0] ml-[10%] mr-[12%] md:mt-0 mt-2 relative w-[9%] md:w-full">
          <Text
            className="absolute bottom-[20%] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700_dd tracking-[-0.15px]"
            size="txtInterSemiBold30WhiteA700dd"
          >
            17°
          </Text>
          <Img
            className="absolute ml-[5%] mr-[-85%] h-[82px] inset-y-[0] my-auto right-[0]"
            src="images/img_fluentweather_white_a700.svg"
            alt="fluentweather"
          />
        </div>
        <Text
          className="absolute mb-5 md:ml-[0] ml-[5%] mr-[-90%] md:mt-0 mt-[30px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.16px]"
          size="txtInterSemiBold32"
        >
          <TimeComponent/>
        </Text>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
