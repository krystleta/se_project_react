import "./WeatherCard.css";
import { weatherCardOptions, deafultWeatherCardOptions } from "../../utils/constants";

const WeatherCard = ({ weatherData }) => {
  //console.log({"weatherdata": weatherData});
  //console.log({"condition": weatherData.condition});
  //console.log({"isDay": isDay});


   const filteredOptions = weatherCardOptions.filter((option) => {
      return (
        option.isDay === weatherData.isDay &&
        option.condition.toLowerCase() === weatherData.condition.toLowerCase()
      );
   });

   let weatherOption;
   if (filteredOptions.length === 0) {
    weatherOption = deafultWeatherCardOptions[weatherData.isDay ? "day" : "night"];
   } else {
    weatherOption = filteredOptions[0];
   }


//console.log({"weatherOption": weatherOption});

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp.F} &deg; F
      </p>
      <img src={weatherOption?.url} alt={`${weatherOption?.condition}`} className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
