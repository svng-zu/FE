import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';
import { useNavigate } from 'react-router-dom';
import { Img, Text, Weather, TimeComponent, Searchlist } from "components";
// import ReactModal from 'react-modal';
import axios from 'axios';
import 'styles/input.css';



function Search() {
  const [search, setSearch] = useState('');
  const [vods, setVods] = useState([]);
  const debounceValue = useDebounce(search, 300);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value)
  };


  useEffect(() => {
    const fetchData = async () => {
      console.log(debounceValue);
      try {
        const response = await axios.get(`https://hello00back.net/search/?Searchword=${debounceValue}`);
     
        if (response.status === 200) {
          const videos = response.data.data;
          console.log(videos);
          console.log(debounceValue);

          if (videos.length >= 20) {

            setVods((videos.slice(20)).map(item => item));
          }
          if (videos.length === 0) {
            setVods([]);
          } else {
            setVods(videos.map(item => item));
          }

        } else {
          console.log("response 오류")
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [debounceValue, search]);


  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-yogi justify-start mx-auto h-[100vh] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="z-10 !sticky top-[0] overflow-block relative flex bg-red-A400 flex md:flex-col flex-row md:gap-5 items-start justify-end pb-1.5 px-1.5 w-full">
            <Img
              className="button common-pointer absolute h-[45px] w-[45px] left-5 md:mt-0 mt-[26px]"
              src="/images/img_arrowdown.svg"
              alt="arrowdown"
              onClick={() => navigate('/familyhomelight')}
            />
            <Text className="absolute font-yogi font-lighter left-[10%] mt-[2%] md:text-2xl text-2xl text-white-A700 tracking-[-0.30px]">
              HELLO 00
            </Text>
            <Text className="absolute font-yogi font-lighter left-[43%] mt-[1.7%] md:text-3xl text-4xl text-white-A700 tracking-[-0.30px]">
              SEARCH
            </Text>
            <div className="relative h-[80px] w-[13%] mr-[1%] mt-[4px] w-[15%] md:w-full">
              <Weather />
            </div>
            <Text
              className="ml-9 md:ml-[0] mr-[2%] md:mt-0 mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[-0.16px]"
              size="txtInterSemiBold32"
            >
              <TimeComponent />
            </Text>
          </div>

          <div>
            <input
              type="text"
              value={search}
              onChange={handleInputChange}
              style={{ width: '100%', height: '16%', display: 'flex', backgroundColor: 'rgb(175, 178, 190, 0.8)' }}
              className='relative !sticky !h-[140%] input-search text-[45px] pl-10'
              placeholder="제목, 캐릭터 또는 장르로 검색하세요"
            />
          </div>

          <div className='ml-[5%] mt-[5%] relative left-0 flex flex-col'>
            {vods.length > 0 ? (

              <Searchlist rankposter={vods} />
            ) : vods.length === 0 && (
              <div>입력한 검색에 대한 결과가 없습니다.</div>
            )}
          </div>
        </div>


      </div>
    </>
  );

};

export default Search;
