import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { getWeather } from "../../utils/weatherApi";
import { coordinates, APIInfo } from "../../utils/constants";
import { getItems, addNewItem, deleteItem } from "../../utils/api";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({ card: "" });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("create");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItem = (item) => {
    addNewItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCardDelete = (card) => {
    deleteItem(card._id)
      .then(() => {
        setClothingItems((currentItems) => {
          const updatedItems = currentItems.filter(
            (item) => item._id !== card._id
          );
          return updatedItems;
        });
        closeActiveModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  useEffect(() => {
    getWeather(coordinates, APIInfo.APIKey)
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const close = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeModal]);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header weatherData={weatherData} handleAddClick={handleAddClick} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        {activeModal === "create" && (
          <AddItemModal
            closeActiveModal={closeActiveModal}
            handleAddItem={handleAddItem}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            name={"item"}
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onClickDelete={handleCardDelete}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
