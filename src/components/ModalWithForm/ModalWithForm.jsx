import "./ModalWithForm.css";

function ModalWithForm({
  name,
  children,
  buttonText,
  title,
  activeModal,
  onClose,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${
        activeModal === "add-garment" ? "modal__opened" : ""
      }`}
      onClick={onClose}
    >
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <h2 className="modal__heading">{title}</h2>
        <button className="modal__close" onClick={onClose}></button>
        <form className="modal__form form" name={name}>
          {children}
          <button className="modal__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
