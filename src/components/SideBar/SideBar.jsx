import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ handleEditProfileModal, handleLogOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        <img
          src={currentUser?.avatar}
          alt={currentUser?.name}
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__nav">
        <ul className="sidebar__links">
          <li>
            <button
              type="text"
              className="sidebar__nav-link"
              onClick={handleEditProfileModal}
            >
              Change profile data
            </button>
          </li>
          <li>
            <button
              type="text"
              className="sidebar__nav-link"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
