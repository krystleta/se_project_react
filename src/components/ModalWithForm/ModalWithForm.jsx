import "./ModalWithForm.css";

function ModalWithForm({
  name,
  title,
  buttonText,
  children,
  activeModal,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${
        activeModal === `${name}` ? "modal_opened" : ""
      }`}
      onClick={onClose}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__heading">{title}</h2>
        <button className="modal__close" onClick={onClose} />
        <form
          className="modal__form form"
          id={name}
          name={name}
          onSubmit={onSubmit}
        >
          {children }
          <button className="modal__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
