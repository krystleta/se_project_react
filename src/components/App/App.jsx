import "./App.css";

//Hooks and Routes
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//Contexts
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

//Utils
import { getWeather } from "../../utils/weatherApi";
import { coordinates, APIInfo } from "../../utils/constants";
import {
  getItems,
  addNewItem,
  deleteItem,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import * as auth from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";

//Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState();
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("create");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("signup");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit-profile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItem = (item) => {
    const token = getToken();
    addNewItem(item, token)
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCardDelete = (card) => {
    const token = getToken();
    deleteItem(card._id, token)
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

  const handleCardLike = (card, isLiked) => {
    const token = getToken();
    !isLiked
      ? addCardLike(card._id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) =>
                item._id === card._id ? updatedCard.data : item
              )
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(card._id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) =>
                item._id === card._id ? updatedCard.data : item
              )
            );
          })
          .catch((err) => console.log(err));
  };

  const handleSignUp = (user) => {
    auth
      .register(user)
      .then((res) => {
        closeActiveModal();
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (user) => {
    if (!email || !password) {
      return;
    }
    auth
      .signIn(user)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setCurrentUser(user);
          setIsLoggedIn(true);
          navigate("/profile");
        }
        closeActiveModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditProfile = (user) => {
    const token = getToken();
    auth
      .editProfile(user, token)
      .then((user) => {
        setCurrentUser(user);
        navigate("/profile");
        closeActiveModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogOut = () => {
    removeToken();
    navigate("/");
    setIsLoggedIn(false);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  //Use Effects
  useEffect(() => {
    getWeather(coordinates, APIInfo.APIKey)
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    const token = getToken();
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              weatherData={weatherData}
              handleAddClick={handleAddClick}
              handleRegisterModal={handleRegisterModal}
              handleLoginModal={handleLoginModal}
              isLoggedIn={isLoggedIn}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      handleEditProfileModal={handleEditProfileModal}
                      onCardLike={handleCardLike}
                      isLoggedIn={isLoggedIn}
                      handleLogOut={handleLogOut}
                    />
                  </ProtectedRoute>
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
          {activeModal === "signup" && (
            <RegisterModal
              closeActiveModal={closeActiveModal}
              handleSignUp={handleSignUp}
              isOpen={activeModal === "signup"}
              handleLoginModal={handleLoginModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              closeActiveModal={closeActiveModal}
              handleLogin={handleLogin}
              isOpen={activeModal === "login"}
              handleRegisterModal={handleRegisterModal}
            />
          )}
          {activeModal === "edit-profile" && (
            <EditProfileModal
              closeActiveModal={closeActiveModal}
              handleEditProfile={handleEditProfile}
              isOpen={activeModal === "edit-profile"}
            />
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
