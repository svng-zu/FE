import axios from 'axios';


// axios를 사용한 예시
axios.get('https://hello00back.net/search/?Searchword=안녕')
  .then((response) => {
    // 데이터 처리
    console.log(response);
  })
  .catch((error) => {
    // 에러 처리
    console.error('There has been a problem with your axios operation:', error);
  });