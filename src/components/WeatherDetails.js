import React from "react";
import { formatToLocalTime } from "../apiKeys";

export const WeatherDetails = ({ placeInfo }) => {
  return (
    <>
      <div className="time-area-temperature">
        <div className="area">
          <span>{`${placeInfo.name}, ${placeInfo.country}`}</span>
        </div>
        <div className="time">
          {formatToLocalTime(placeInfo.localtime_epoch, placeInfo.tz_id)}
        </div>
        <div className="temperature">{`${placeInfo.temp_c} ºC | ${placeInfo.temp_f} ºF`}</div>
        <div className="icon-text">
          <span>{placeInfo.text}</span>
          <img src={placeInfo.icon} alt={placeInfo.text} />
        </div>
      </div>

      <div className="weather-details">
        <div className="headings">
          <div className="humidity">
            <span>Humidity</span>
            <span>{`${placeInfo.humidity} %`}</span>
          </div>
          <div className="Visibiity">
            <span>Visibiltiy</span>
            <span>{`${placeInfo.vis_km} kms`}</span>
          </div>
          <div className="wind-speed">
            <span>Wind Speed</span>
            <span>{`${placeInfo.wind_kph} kph`}</span>
          </div>
          <div className="feels-like">
            <span>Feels Like</span>
            <span>{`${placeInfo.feelslike_c} ºC`}</span>
          </div>
        </div>
      </div>
    </>
  );
};
