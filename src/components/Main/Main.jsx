import "./Main.css";
import React, { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherData,
  onCardClick,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.temperature?.[currentTemperatureUnit] || 999;

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherData.type;
  });

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {temp}&deg;{currentTemperatureUnit} / You may want to wear:
        </p>
        <div className="cards__list">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
