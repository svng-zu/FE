import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const SignupPageLightPage = () => {
  const [id, setId] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genre, setGenre] = useState([]);
  
  useEffect(() => {
    const storedId = localStorage.getItem('subsr');
    if (storedId) {
      setId(storedId);
    }
  }, []);
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    const genreIndex = selectedGenres.indexOf(genre);
    if (genreIndex === -1) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      const updatedGenres = [...selectedGenres];
      updatedGenres.splice(genreIndex, 1);
      setSelectedGenres(updatedGenres);
      setGenre(genre);
    }  
  };

  const isSelected = selectedGenres.includes(genre);
  const buttonClassName = `cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[157px] ${
    isSelected ? 'selected-class' : 'default-class'
  }`;
  
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
              {id}
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
                    className={buttonClassName}
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("액션")}
                  >
                    액션
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("코미디")}
                  >
                    코미디
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("로맨스")}
                  >
                    로맨스
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("스릴러")}
                  >
                    스릴러
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("SF/판타지")}
                  >
                    SF/판타지
                  </Button>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[33px] items-center justify-between my-0 w-full">
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[157px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("시사교양")}
                  >
                    시사교양
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("예능")}
                  >
                    예능
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("스포츠")}
                  >
                    스포츠
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("다큐")}
                  >
                    다큐
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[51px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                    shape="round"
                    color="deep_orange_50_fc"
                    variant="fill"
                    onClick={() => handleGenreClick("애니메이션")}
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
                  onClick={() => handleGenreClick("키즈")}
                >
                  키즈
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[50px] sm:ml-[0] ml-[31px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                  shape="round"
                  color="deep_orange_50_fc"
                  variant="fill"
                  onClick={() => handleGenreClick("게임")}
                >
                  게임
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[50px] sm:ml-[0] ml-[34px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                  shape="round"
                  color="deep_orange_50_fc"
                  variant="fill"
                  onClick={() => handleGenreClick("성인")}
                >
                  성인
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[50px] sm:ml-[0] ml-[37px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
                  shape="round"
                  color="deep_orange_50_fc"
                  variant="fill"
                  onClick={() => handleGenreClick("가족")}
                >
                  가족
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
