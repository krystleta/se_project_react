import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const AddItemModal = ({ closeActiveModal, handleAddItem, isOpen }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { formData, handleChange, setFormData } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  useEffect(() => {
    if (isOpen === true && isSubmitted) {
      setFormData({ name: "", imageUrl: "", weather: "" });
      setIsSubmitted(false);
    }
  }, [isOpen, setFormData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(formData);
    setIsSubmitted(true);
  };

  return (
    <ModalWithForm
      name="create"
      title="New garment"
      buttonText="Add garment"
      activeModal={"create"}
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name{""}
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          className="modal__input modal__input_type_name"
          required
          maxLength="40"
          minLength="2"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="modal__error" id="name-error"></span>
      </label>
      <label className="modal__label">
        Image{""}
        <input
          id="imageUrl"
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          className="modal__input modal__input_type_url"
          required
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <span className="modal__error" id="imageUrl-error"></span>
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__input modal__label_type_radio">
          <input
            type="radio"
            id="hot"
            name="weather"
            value="Hot"
            className="modal__radio-input"
            onChange={handleChange}
          />{" "}
          Hot
        </label>
        <label className="modal__input modal__label_type_radio">
          <input
            type="radio"
            id="warm"
            name="weather"
            value="Warm"
            className="modal__radio-input"
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label className="modal__input modal__label_type_radio">
          <input
            type="radio"
            id="cold"
            name="weather"
            value="Cold"
            className="modal__radio-input"
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
