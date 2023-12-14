import React, { useEffect } from 'react';
import 'styles/weather.css'
function Weather() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://app2.weatherwidget.org/js/?id=ww_33a8223582235';
        script.async = true;
    
        const weatherWidgetContainer = document.getElementById('weather-widget-container');
        weatherWidgetContainer.appendChild(script);
    
        return () => {
          if (weatherWidgetContainer.contains(script)) {
            weatherWidgetContainer.removeChild(script);
          }
        };
      }, []);

      return (
        <div id="weather-widget-container">
          <style>
            {`
              /* More forecasts */
              #ww_33a8223582235_u {
                color: transparent;
                z-index:
              }
      
              /* 일기 예보 */
              #ww_33a8223582235_u::after {
                content: '일기 예보';
                color: transparent;
                position: absolute;
                left: 0;
                top: 0;
                z-index: -1;
              }
            `}
          </style>
          <div
            id="ww_33a8223582235"
            v="1.3"
            loc="id"
            a='{"t":"horizontal","lang":"ko","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FFFFFF00","cl_font":"rgba(255,255,255,1)","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_phw":3,"el_whr":3,"el_nme":3}'
          >
            More forecasts:{" "}
            <a href="https://sharpweather.com/ko/seoul/" id="ww_33a8223582235_u" target="_blank" rel="noopener noreferrer">
              일기 예보
            </a>
          </div>
        </div>
      );
}

export { Weather };