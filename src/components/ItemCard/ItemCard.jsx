import "./ItemCard.css";
import heartIcon from "../../assets/heart-icon.svg";
import heartIconLiked from "../../assets/heart-icon-liked.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item, isLiked);
  };

  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser._id);

  return (
    <div className="card__item">
      <div className="card__container">
        <div className="card__title">{item.name}</div>
        {isLoggedIn ? (
          <button className="card__like-button" onClick={handleLike}>
            <img
              src={isLiked ? heartIconLiked : heartIcon}
              alt="Like"
              className="card__like-button-icon"
            />
          </button>
        ) : (
          ""
        )}
      </div>
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={handleCardClick}
      />
    </div>
  );
}

export default ItemCard;
