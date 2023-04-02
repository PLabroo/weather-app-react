import { DateTime } from "luxon";

const API_KEY = "02d8af84f1ac46108c4134540233103";
const BASE_URL = "https://api.weatherapi.com/v1/";

// ------------------------- CURRENT WEATHER -----------------------------

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, key: API_KEY });
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    location: { name, country, tz_id, localtime_epoch },
    current: {
      temp_c,
      temp_f,
      wind_kph,
      humidity,
      vis_km,
      feelslike_c,
      uv,
      condition: { text, icon },
    },
  } = data;

  return {
    name,
    country,
    temp_c,
    temp_f,
    wind_kph,
    humidity,
    vis_km,
    text,
    icon,
    feelslike_c,
    tz_id,
    localtime_epoch,
    uv,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "current.json",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

// ------------------------------------ FORECAST DATA ----------------------------------

const formatCurrentForecast = (data) => {
  let { forecast } = data;

  forecast = forecast.forecastday.slice(1, 6).map((d) => {
    return {
      date: d.date,
      timezone: d.tz_id,
      temp: d.day.maxtemp_c,
      icon: d.day.condition.icon.split("/"),
      text: d.day.condition.text,
    };
  });
  return forecast;
};

const getForecastData = async (searchParams) => {
  const formattedForecast = await getWeatherData(
    "forecast.json",
    searchParams
  ).then(formatCurrentForecast);
  return formattedForecast;
};

// ------------------------------- LOCAL TIME ---------------------------

export const formatToLocalTime = (
  secs,
  zone,
  format = "ccc, dd LLL, yy' | Local Time - 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export { getFormattedWeatherData, getForecastData };
