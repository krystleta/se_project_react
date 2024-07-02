import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ closeActiveModal, handleEditProfile, isOpen }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isOpen === true && isSubmitted) {
      setFormData({
        name: "",
        avatar: "",
      });
      setIsSubmitted(false);
    }
  }, [isOpen, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(formData);
    setIsSubmitted(true);
  }

  return (
    <ModalWithForm
      name="edit-profile"
      title="Change profile data"
      buttonText="Save changes"
      activeModal={"edit-profile"}
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
          value={formData.name}
          onChange={handleChange}
        />
        <span className="modal__error" id="name-error"></span>
      </label>
      <label className="modal__label">
        Avatar URL{""}
        <input
          id="avatar"
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          className="modal__input modal__input_type_url"
          required
          value={formData.avatar}
          onChange={handleChange}
        />
        <span className="modal__error" id="avatar-error"></span>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
