import React, { useEffect, useState } from "react";
import { getFormattedWeatherData, getForecastData } from "./apiKeys";

import { Search } from "./components/Search";
import { WeatherDetails } from "./components/WeatherDetails";
import { Forecast } from "./components/Forecast";

function App() {
  const [place, setPlace] = useState({ q: "bangalore", aqi: "yes" });
  const [searchedCity, setSearchedCity] = useState("");
  const [placeInfo, setPlaceInfo] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({
        ...place,
      });
      setPlaceInfo(data);
    };
    fetchWeather();

    const fetchForecast = async () => {
      const data = await getForecastData({
        ...place,
        days: "7",
      });
      setForecast(data);
    };
    fetchForecast();
  }, [place]);

  const findFreshData = (e) => {
    e.preventDefault();
    setPlace({ q: searchedCity, aqi: "yes" });
    setSearchedCity("");
  };

  return (
    <>
      {placeInfo && (
        <div className="app">
          <Search
            findFreshData={findFreshData}
            setSearchedCity={setSearchedCity}
            searchedCity={searchedCity}
          />
          <WeatherDetails placeInfo={placeInfo} />
          {forecast && <Forecast forecast={forecast} />}
        </div>
      )}
    </>
  );
}

export default App;
