import headerLogo from "../../assets/logo.png";
import headerAvatar from "../../assets/avatar.png";
import "./Header.css";

function Header({ weatherData, handleAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="What To Wear" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        className="header__add-clothes-button"
        type="button"
        onClick={handleAddClick}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={headerAvatar}
          alt="Terrence Tegegne"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
