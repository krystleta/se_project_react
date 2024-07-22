import React, { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ closeActiveModal, handleEditProfile, isOpen }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile({name, avatar});
  };

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
          value={name}
          onChange={handleNameChange}
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
          value={avatar}
          onChange={handleAvatarChange}
        />
        <span className="modal__error" id="avatar-error"></span>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
