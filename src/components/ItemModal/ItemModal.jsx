import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemModal({ name, activeModal, onClose, card, onClickDelete }) {
  const handleCardDelete = () => {
    onClickDelete(card);
  }

  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const itemDeleteButtonClassName = (
    `modal__delete ${isOwn ? 'modal__delete' : 'modal__delete_hidden'}`
  );

  return (
    <div
      className={`modal modal_type_${name} ${
        activeModal === "preview" ? "modal_opened" : ""
      }`}
      onClick={onClose}
    >
      <div
        className="modal__container modal__container_type_image"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close modal__close_type_transparent"
          onClick={onClose}
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <p className={itemDeleteButtonClassName} onClick={handleCardDelete} >Delete item</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
