import "./WeatherCard.css";
import React, { useContext } from "react";
import {
  weatherCardOptions,
  deafultWeatherCardOptions,
} from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ weatherData }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.temperature?.[currentTemperatureUnit] || 999;
  const filteredOption = weatherCardOptions.find((option) => {
    return (
      option.isDay === weatherData.isDay &&
      option.condition.toLowerCase() === weatherData.condition.toLowerCase()
    );
  });

  let weatherOption;
  if (!filteredOption) {
    weatherOption =
      deafultWeatherCardOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOption;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temp}&deg;{currentTemperatureUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`${weatherOption?.condition}`}
        className="weather-card__image"
      />
    </section>
  );
};

export default WeatherCard;
