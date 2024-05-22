import "./Header.css";
import headerLogo from "../../assets/logo.png";
import headerAvatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ weatherData, handleAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
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
      <button
        className="header__add-clothes-button"
        type="button"
        onClick={handleAddClick}
      >
        + Add clothes
      </button>
      <Link to="/profile" className="header__user-link">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img
            src={headerAvatar}
            alt="Terrence Tegegne"
            className="header__avatar"
          />
        </div>
      </Link>
    </header>
  );
}

export default Header;
