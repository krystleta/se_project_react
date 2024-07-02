import "./Header.css";
import headerLogo from "../../assets/logo.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Header({
  weatherData,
  handleAddClick,
  handleRegisterModal,
  handleLoginModal,
  isLoggedIn,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="What To Wear" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="toggle__switch">
        <ToggleSwitch />
      </div>

      {isLoggedIn ? (
        <>
          <button
            className="header__add-clothes-button"
            type="button"
            onClick={handleAddClick}
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__user-link">
            <div className="header__user-container">
              <p className="header__username">{currentUser?.name}</p>
              <img
                src={currentUser?.avatar}
                alt={currentUser?.name}
                className="header__avatar"
              />
            </div>
          </Link>
        </>
      ) : (
        <>
          <button
            className="header__signup-button"
            onClick={handleRegisterModal}
          >
            Sign Up
          </button>
          <button className="header__signup-button" onClick={handleLoginModal}>
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
