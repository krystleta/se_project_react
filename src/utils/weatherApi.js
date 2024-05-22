import { APIInfo } from "./constants";
import { checkResponse } from "./api";

export const getWeather = ({ latitude, longitude }, APIKey) => {
  const weatherAPI = fetch(
    `${APIInfo.APIBaseURL}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
  )
    .then((res) => {
      return checkResponse(res);
    })
    .then((data) => {
      return filterWeatherData(data);
    });
  return weatherAPI;
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temperature = {
      F: Math.round(data.main.temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temperature.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 85) {
    return "warm";
  } else {
    return "cold";
  }
};