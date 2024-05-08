import "./WeatherCard.css";
import { weatherCardImages } from "../../utils/constants";
import { weatherCardImageLocation } from "../../utils/constants";

//const WeatherCard = ({ isDay="true", condition="rain", weatherData }) => {
const WeatherCard = ({ weatherData }) => {
  console.log({"weatherdata": weatherData});
  //console.log({"weatherdata": weatherData.condition});
  //console.log({"isDay": weatherData.isDay});

  const img_src = weatherCardImages.filter((i) => {
     return i.isDay === weatherData.isDay && i.condition.toLowerCase() === weatherData.condition.toLowerCase();
  });

   const img_path = img_src[0].img_filename || "";

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp.F} &deg; F
      </p>
      <img src={weatherCardImageLocation + img_path} alt={weatherData.condition} className="weather-card__image" />
    </section>
  );
}



export default WeatherCard;
