import "./WeatherCard.css";
import { weatherCardImages } from "../../utils/constants";
import { weatherCardImageLocation } from "../../utils/constants";

const WeatherCard = ({ isDay, condition, temperature }) => {
//const WeatherCard = ({ isDay="true", condition="clouds", temperature }) => {
//const WeatherCard = ({ weatherData }) => {
  //console.log({"weatherdata": weatherData});
  console.log({"condition": condition});
  console.log({"isDay": isDay});

  const img_src = weatherCardImages.filter((i) => {
     return i.isDay === isDay && i.condition.toLowerCase() === condition.toLowerCase();
  });

   const img_path = img_src[0].img_filename || "";

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temperature} &deg; F
      </p>
      <img src={weatherCardImageLocation + img_path} alt={condition} className="weather-card__image" />
    </section>
  );
}



export default WeatherCard;
