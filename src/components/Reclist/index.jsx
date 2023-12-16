import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "styles/smooth.css"


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
      <button className="button" onClick={() => scrollTo(-600)} style={{ width: '55px', position: 'absolute', left: '1.5%', zIndex: '1'  }}>
        <img src="https://seasonmarket.co.kr/img/slider_left.png" alt="Previous" /></button>
      <div style={{ position: 'relative', display: 'flex', overflowX: 'auto', marginLeft: '2%', marginRight: '0', minWidth: '100%', maxWidth: '100%' }} ref={containerRef}>
        {rankposter.map((item, index) => (
          <img
            key={index}
            style={{ width: '170px', height: '220px', marginRight: '1px', border: '2px solid #ccc', borderRadius: '1px', cursor: 'pointer' }}
            src={item[2]}
            alt={`${index}`}
            onClick={() => Click(item[0], navigate)}
          />
        ))}
      </div>
      <button className="button" onClick={() => scrollTo(600)} style={{ width: '55px', position: 'absolute', right: '-2.5%' }}>
        <img src="https://seasonmarket.co.kr/img/slider_right.png" alt="next" />
      </button>
    </div>
  );
};

export { Reclist };
