import React from "react";

export const Forecast = ({ forecast }) => {
  return (
    <div className="daily-forecast">
      <h1>Daily Forecast</h1>
      <div className="forecast-details">
        {forecast.map((daily, index) => {
          return (
            <div key={index} className="ind-forecast">
              <div className="date">{daily.date}</div>
              {/* <div className="icon">{daily.icon}</div> */}
              <img
                src={`//cdn.weatherapi.com/weather/64x64/${daily.icon[5]}/${daily.icon[6]}`}
                alt={daily.text}
              />
              <div className="temp">{daily.temp.toFixed()} ºC</div>
              <div className="text">{daily.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
