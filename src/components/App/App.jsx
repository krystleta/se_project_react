import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather } from "../../utils/weatherApi";
import { coordinates, APIInfo } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({card: ""});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIInfo.APIKey)
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeActiveModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header weatherData={weatherData} handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        name="add-garment"
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        <label className="modal__label" htmlFor="item-name">
          Name{""}
          <input
            id="item-name"
            type="text"
            name="name"
            placeholder="Name"
            className="modal__input modal__input_type_name"
            required
            maxLength="40"
            minLength="2"
          />
          <span className="modal__error" id="item-name-error"></span>
        </label>
        <label className="modal__label" htmlFor="item-image-url">
          Image{""}
          <input
            id="item-image-url"
            type="url"
            name="link"
            placeholder="Image URL"
            className="modal__input modal__input_type_url"
            required
          />
          <span className="modal__error" id="item-image-url-error"></span>
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label className="modal__input modal__label_type_radio" htmlFor="hot">
            <input
              type="radio"
              id="hot"
              name="weather-type"
              value="hot"
              className="modal__radio-input"
            />{" "}
            Hot
          </label>
          <label
            className="modal__input modal__label_type_radio"
            htmlFor="warm"
          >
            <input
              type="radio"
              id="warm"
              name="weather-type"
              value="warm"
              className="modal__radio-input"
            />{" "}
            Warm
          </label>
          <label
            className="modal__input modal__label_type_radio"
            htmlFor="cold"
          >
            <input
              type="radio"
              id="cold"
              name="weather-type"
              value="cold"
              className="modal__radio-input"
            />{" "}
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        name={"item"}
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
