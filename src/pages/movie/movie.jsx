useEffect(() => {
    // const mainApi = async () = {
    //   setLoading(true);
    //   try {
    //     const response = await fetch(`api url`)
    //   }
    // }

  
    const fetchData = async () => {
      try{
        const access = localStorage.getItem('access_token');
        if (!access) {
          navigate('/');
          return; // 로그인 페이지로 이동 후 함수 종료
        }
      }catch(error){
        setLoading(true);
        // const mresponse = await axios.get('https://hello00back.net/home/영화')
        // console.log("영화 추천 :", mresponse.data)
        // const dresponse = await axios.get('https://hello00back.net/home/TV드라마')
        // console.log("드라마 수신 여부", dresponse.status)
        // if (mresponse.status && dresponse.status === 200){
        //   const mdata = mresponse.data.data;
        //   const ddata = dresponse.data.data;

        //   const movie = mdata.map(item => item); //주간 랭킹
        //   const drama = ddata.map(item => item); // 장르별
          
      }  
          

      //     setMovie(movie);
      //     setDrama(drama);
      //     console.log("영화", movie, "드라마",drama);
        
      //     setLoading(false);
      //   }


      // }
      // catch (error) {
      //   setTimeout(() => {
      //     setLoading(false); // 로딩 완료
      //     // 실패 로직 필요시 추가
      //   }, 10000);
      //   console.error('Error fetching data:', error);
        
    }
});
