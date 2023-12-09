import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button, Img } from "components"; //Input, Text
import C1LoginPageLightIdinput from "components/C1LoginPageLightIdinput/login_input";
import { useCookies } from 'react-cookie';


const LoginPageLightPage = () => {
  const navigate = useNavigate();
  

  const [id, setId] = useState('');
  
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      // access_token이 있다면 원하는 URL로 이동
      navigate('/FrontpageLight');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    //alert(e)
    //const newValue = e.target.value;
    setId(e);
    console.log(e);
  }
  const [cookie, setCookie] = useCookies(['access']);

const handleLogin = async () => {
  try {
    const response = await axios.get('https://hello00back.net/vodrec/', {
      headers: {
        Authorization : accessToken,
      }
    });
    const newCookie = response.data.token;
    setCookie('access', newCookie);
      //const response = await axios.get('http://127.0.0.1:8000/scheck/') // 백 endpoint 주소
      console.log(response.status);
      if (response.status === 200){
        navigate('FrontpageLight');
        console.log(cookie);
      }
    }catch (error) {
    console.error('Error 발생 :', error);
    
    if (error.response.status !== 200){
      
      try {
        const postresponse = await axios.post('https://hello00back.net/login/', {
          'subsr': id
        });
        
        if (postresponse.status === 200) {
          console.log(postresponse.data)
          setCookie('access', postresponse.data.token.access)
          const accessToken = postresponse.data.token.access; // 예상되는 응답에서 access_token을 가져옴
          const refreshToken = postresponse.data.token.refresh;
          // 쿠키 및 로컬 스토리지에 토큰 저장
          localStorage.setItem('ip', postresponse.data.ip);
          localStorage.setItem('access_token', accessToken);
          localStorage.setItem('refresh_token', refreshToken);
          localStorage.setItem('subsr', postresponse.data.user.subsr);
          localStorage.setItem('subsr_id', postresponse.data.user.subsr_id);
          // axios의 인스턴스에 헤더 추가
          axios.defaults.headers.common['Authorization'] = 'JWT ' + accessToken;
          console.log("로그인 성공적")
          // navigate(""); // 페이지 이동
          // location.reload(); // 페이지 새로고침
          navigate('FrontpageLight'); // 원하는 페이지로 이동
        }
      
      } catch (postError) {
        console.error('로그인 POST 요청 실패:', postError);
        setId('');
        alert("아이디를 다시 입력해주세요");
      }
    } else {
      console.error('GET 요청 실패:', error.response);
      setId('');
      alert("아이디를 다시 입력해주세요");
    }
  }
};

  return (
    <>
      <div className="bg-gray-100 border border-black-800 border-solid flex flex-col sm:gap-10 md:gap-10 gap-[156px] items-center justify-start mx-auto pb-[205px] w-full">
        <div className="bg-red-A400 h-[90px] w-full"></div>
        <div className="md:h-[458px] h-[573px] md:px-5 relative w-[55%] md:w-full">
          <div className="absolute bg-white-A700 bottom-[10] flex flex-col inset-x-[1] items-center justify-center mx-auto outline outline-[1px] outline-white-A700_4c p-[41px] md:px-10 sm:px-5 rounded-[40px] shadow-bs w-full">
            <Img
              className="absolute h-[200px] inset-x-[0] mx-auto object-cover top-[-150px] w-[30%]"
              src="images/img_hello.png"
              alt="hello"
              style={{ objectFit: 'contain' }}
            />
            <C1LoginPageLightIdinput
              className="flex flex-col font-ibmplexsans h-[124px] md:h-auto items-start justify-start max-w-[700px] mt-[100px] w-full"
              value={id}
              onChange = {handleInputChange}
            />
            <div className="flex flex-col font-inter items-start justify-start mt-0.5 w-auto">
              <Button
                className="common-pointer cursor-pointer font-semibold h-[50px] text-center text-lg tracking-[-0.09px] w-[175px]"
                onClick={handleLogin}
                shape="round"
                color="blue_gray_100"
                size="lg"
                variant="fill"
                type="submit"
              >
                로그인
              </Button>
            </div>
            <Button className="bg-transparent cursor-pointer font-mako mb-[62px] min-w-[113px] mt-[17px] text-[15px] text-black-900 text-center tracking-[0.16px]">
              회원이 아니라면?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPageLightPage;
