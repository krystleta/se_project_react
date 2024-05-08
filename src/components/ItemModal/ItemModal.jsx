import "./ItemModal.css";

function ItemModal({ name, activeModal, onClose, card }) {
  return (
    <div
      className={`modal modal_type_${name} ${activeModal === "preview" ? "modal__opened" : ""}`}
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
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
