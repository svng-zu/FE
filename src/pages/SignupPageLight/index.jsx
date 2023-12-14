import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import '../../styles/button.css'

const SignupPageLightPage = () => {
  const handleLogout = () => {
    const confirmLogout = window.confirm('로그아웃 하시겠습니까?');
    if (confirmLogout) {    
      localStorage.clear();
      document.cookie.split(";").forEach(cookie => {
        document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
      });
      
        navigate('/');
      } else {

    }
   };

  const [id, setId] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genres = ['드라마', '액션', '모험', '코미디', '로맨스', '애니메이션', '스릴러', '해외시리즈', '멜로', '판타지',
   '공포', '범죄', 'SF', '미스터리', '가족', '예능', '시대극', '다큐', '시사교양', '키즈']
  // const [genre, setGenre] = useState([]);
  // const [buttonClassName, setButton] = useState(); 
  useEffect(() => {
    const storedId = localStorage.getItem('subsr');
    if (storedId) {
      setId(storedId);
    }
  }, []);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const isSelected = selectedGenres.includes(genre);
  //   const button =isSelected ? 'selected-class' : 'default-class';
  //   setButton(button);
  // }, [selectedGenres, genre]);
  
  const handleGenreClick = (clickedGenre) => {
    let updatedGenres = [...selectedGenres];
  
    if (selectedGenres.includes(clickedGenre)) {
      updatedGenres = selectedGenres.filter((genre) => genre !== clickedGenre);
    } else {
      updatedGenres = [...selectedGenres, clickedGenre];
    }
    
    setSelectedGenres(updatedGenres);
    localStorage.setItem('genre', JSON.stringify(updatedGenres.map(genre => genres.indexOf(genre))));
  };
  

  const isSelected = (genre) => selectedGenres.includes(genre);
  const getButton = (genre) => isSelected(genre) ? 'selected-class' : 'default-class';
  
  
  
  
  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter sm:gap-10 md:gap-10 gap-[138px] justify-start mx-auto pb-[120px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-red-A400 flex flex-col items-start justify-start p-6 sm:px-5 w-full">
            <Img
              className="common-pointer h-[37px] mb-[3px] md:ml-[0] ml-[17px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
              onClick={() => handleLogout(true)}
            />
          </div>
          <Text
            className="leading-[50.00px] mt-[50px] text-3xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.18px]"
            size="txtInterSemiBold36"
          >
            <span className="text-black-900 font-inter font-yogi">
              안녕하세요,{" "}
            </span>
            <span className="text-red-A400 text-[40px] font-inter font-yogi">
              {id}
            </span>
            <span className="text-black-900 font-inter font-yogi">
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
                orientation="horizontal"
              >
                {/* <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full"> */}
                  {/* <button
                    className={getButton(genre)}
                    // shape="round"
                    // color="deep_orange_50_fc"
                    // variant="fill"
                    onClick={() => handleGenreClick("액션")}
                  >
                    액션
                  </button> */}
              <div className="button-container font-yogi">
                {genres.map((genre) => (
                  <button
                  key={genre}
                  className={getButton(genre)}
                  onClick={() => {handleGenreClick(genre); 
                    localStorage.setItem('new', 'new')}
                  }
                    >
                  {genre}
                  </button>
                  ))}
                </div>
              </List>
              
              
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[-10px]  px-[160px] w-full">
        <Button
          className="common-pointer cursor-pointer font-yogi h-[50px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.14px] w-[158px]"
          onClick={() => {
          const storedGenres = JSON.parse(localStorage.getItem('genre') || '[]');
          if (storedGenres.length === 0) {
          alert('리스트가 비어 있습니다.');
          } else {
          navigate("/FrontpageLight");
          }
          }}
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
