import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'styles/smooth.css'


const Ranklist = ({ rankposter }) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  const Click = (dataItem, navigate) => {
    navigate(`/Light/${dataItem}`);
  };
  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '24px',
    outline: 'none',
    padding: '10px',
    color: '#555',
    width: '50px', // 원하는 너비 설정
    height: '50px',
  };
    const scrollTo = (scrollOffset) => {
      const container = containerRef.current;
      container.scrollLeft += scrollOffset;
    };

    return (
        <div style={{postion: 'relative', display:'flex', alignItems: 'center', marginLeft: '8%', marginRight: '-500%' }}>
          <button className="button" onClick={() => scrollTo(-600)} style={{...buttonStyle, position: 'absolute', left: '1%'}}><img src="https://seasonmarket.co.kr/img/slider_left.png" alt="Previous"/></button>
          <div style={{postion: 'relative', display: 'flex', overflowX: 'auto', marginLeft: '2%', marginRight: '0', minWidth: '96%', maxWidth: '96%'}} ref={containerRef}>
            {rankposter.map((item, index) => (
              <img
                key={index}
                style={{ width: '340px', height: '450px', marginRight: '25px', border: '2px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
                src={item[2]}
                alt={`${index}`}
                onClick={() => Click(item[0], navigate)}
              />
            ))}
          </div>
          <button className="button" onClick={() => scrollTo(600)} style={{...buttonStyle, position: 'absolute', right: '-520%'}}>
            <img src="https://seasonmarket.co.kr/img/slider_right.png" alt="next"/></button>
        </div>
      );
};

export { Ranklist };