import "./WeatherCard.css";
import React, { useContext, useState } from "react";
import { weatherCardOptions, deafultWeatherCardOptions, } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ weatherData }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.temperature?.[currentTemperatureUnit] || 999;
  const filteredOptions = weatherCardOptions.filter((option) => {
    return (
      option.isDay === weatherData.isDay &&
      option.condition.toLowerCase() === weatherData.condition.toLowerCase()
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption =
      deafultWeatherCardOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
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
