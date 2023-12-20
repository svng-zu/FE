import { useNavigate } from "react-router-dom";

const VideoItem = ({ poster, title, genre, actor, onClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width:'100%'}} onClick={onClick}>
      <img src={poster} alt={title} style={{ width:'15%' }} />
      <div className="w-full">
      <div className="font-yogi text-[200%] w-full ml-[40%]">
        {title}
      </div>
      <div className="font-yogi mt-[5%] text-[150%] ml-[40%]">
        {genre}
      </div>
      <div className="font-yogi ml-[40%] mt-[5%] w-full">
        출연: {actor}
      </div>
      </div>
    </div>
  );
};

const VideoList = ({ data }) => {
  const navigate = useNavigate();
  const filteredData = data ? data.filter(item => item !== null) : [];
  
  const handleClick = (dataItem) => {
    navigate(`/Light/${dataItem}`);
  };

  return (
    <div>
      {filteredData.map((item, index) => {
        const combinedGenre = `${item[1]}, ${item[4]}`;
        return (
          <div className="border border-black p-2 w-full">
          <VideoItem
            key={index}
            poster={item[2]}
            title={item[0]}
            genre={combinedGenre}
            actor={item[8]}
            onClick={() => handleClick(item[6])}
          />
          </div>
        );
      })}
    </div>
  );


   


};

export { VideoList };


