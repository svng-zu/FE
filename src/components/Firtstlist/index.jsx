import React, { useState, useEffect } from "react";


import 'styles/banner.css'; 

const Firstlist = () => { 
    const imagenames = ['images/seoul1.jpg', '/images/sweet2.jpg', '/images/boygen.jpg', '/images/lucky.jpg', '/images/nowdie.png'] 
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenames.length);
        }, 10000);
    
        return () => clearInterval(interval);
      }, [imagenames.length]);
      const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagenames.length) % imagenames.length);
      };
    
      const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenames.length);
      };
      const leftImageIndex = (currentImageIndex - 1 + imagenames.length) % imagenames.length;
        const rightImageIndex = (currentImageIndex + 1) % imagenames.length;
      return(
        <>



                <div className="image-slider-container mt-[1%]" style={{
                width: '92%',
                height: '570px',
                position: 'relative',
                overflow: 'hidden',
                marginLeft: '3.5%'
                }}>

                <div className="left-half" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '100%',
                background: `linear-gradient(to bottom, rgb(248, 218, 218, 0.7) 0%, rgba(247, 245, 245, 0.1) 50%, rgba(247, 245, 245, 0.3) 100%), url(${imagenames[leftImageIndex]})`,

                }}></div>

                <div className="right-half" style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                background: `linear-gradient(to bottom, rgb(248, 218, 218, 0.7) 0%, rgba(247, 245, 245, 0.1) 50%, rgba(247, 245, 245, 0.3) 100%), url(${imagenames[rightImageIndex]})`,

                }}></div>

                <div className="relative button-wrapper left ml-[0%]">
                  <button className="left-button" onClick={handlePrevClick}>
                    <img src="https://seasonmarket.co.kr/img/slider_left.png" alt="Previous"/>
                  </button>
                  <button className="right-button ml-[93.3%]" onClick={handleNextClick}>
                <img src="https://seasonmarket.co.kr/img/slider_right.png" alt="Next"/>
                </button>
                </div>

            {/* <div className="relative image-slider-wrapper"> */}
            <div className="absolute image-slider left-[25%]">
                
                

                  {imagenames.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className={index === currentImageIndex ? 'active' : ''}

                    />
                    ))}
                    
                  
                </div>
            {/* </div> */}
            <div className="absolute button-wrapper right" style={{ marginLeft: '-100%' }}>

            </div>

                </div>

        </>
      )

};

export { Firstlist }