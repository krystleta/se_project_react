import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({
  clothingItems,
  onCardClick,
  handleAddClick,
  onCardLike,
  isLoggedIn,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const filteredCards = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button
          className="clothes-section__button"
          type="button"
          onClick={handleAddClick}
        >
          + Add New
        </button>
      </div>
      <div className="clothes-section__items">
        {filteredCards.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ClothesSection;
