import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData, handleCardClick }) {
//  console.log({"weatherdata": weatherData});
  return (
    <main className="main">
      <WeatherCard isDay="true" condition="rain" temperature={weatherData.temp.F} />
      {/*<WeatherCard isDay={weatherData.isDay} condition={weatherData.condition} temperature={weatherData.temp.F} />*/}
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return <ItemCard key={item._id} item={item} onCardClick={handleCardClick} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
