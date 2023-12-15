import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';



const Reclist = ({ rankposter }) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const Click = (dataItem, navigate) => {
    navigate(`/Light/${dataItem}`);
  };
  const scrollTo = (scrollOffset) => {
    const container = containerRef.current;
    container.scrollLeft += scrollOffset;
  };

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginLeft: '15%', marginRight: '-500%' }}>
      <button onClick={() => scrollTo(-600)} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '24px', outline: 'none', padding: '10px', color: '#555', width: '50px', height: '50px', position: 'absolute', left: '5%' }}><img src="https://seasonmarket.co.kr/img/slider_left.png" alt="Previous" /></button>
      <div style={{ position: 'relative', display: 'flex', overflowX: 'auto', marginLeft: '2%', marginRight: '0', minWidth: '96%', maxWidth: '96%' }} ref={containerRef}>
        {rankposter.map((item, index) => (
          <img
            key={index}
            style={{ width: '220px', height: '270px', marginRight: '20px', border: '2px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
            src={item[2]}
            alt={`${index}`}
            onClick={() => Click(item[0], navigate)}
          />
        ))}
      </div>
      <button onClick={() => scrollTo(600)} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '24px', outline: 'none', padding: '10px', color: '#555', width: '50px', height: '50px', position: 'absolute', right: '-520%' }}>
        <img src="https://seasonmarket.co.kr/img/slider_right.png" alt="next" />
      </button>
    </div>
  );
};

export { Reclist };
