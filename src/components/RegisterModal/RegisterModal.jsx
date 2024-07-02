import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignUpModal = ({ closeActiveModal, handleSignUp, isOpen, handleLoginModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        email: "",
        password: "",
        name: "",
        avatar: "",
      });
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(formData);
    setIsSubmitted(true);
  }

  return (
    <ModalWithForm
      name="signup"
      title="Sign Up"
      buttonText="Sign Up"
      activeModal={"signup"}
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      spanText="or Log In"
      orModal={handleLoginModal}
    >
      <label className="modal__label">
        Email{""}
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          className="modal__input modal__input_type_email"
          required
          maxLength="40"
          minLength="2"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="modal__error" id="email-error"></span>
      </label>
      <label className="modal__label">
        Password{""}
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          className="modal__input modal__input_type_password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <span className="modal__error" id="password-error"></span>
      </label>
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

export default SignUpModal;
