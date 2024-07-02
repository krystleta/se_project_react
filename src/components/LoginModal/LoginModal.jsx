import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ closeActiveModal, handleLogin, isOpen, handleRegisterModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      });
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
    setIsSubmitted(true);
  };

  return (
    <ModalWithForm
      name="login"
      title="Log In"
      buttonText="Log In"
      activeModal={"login"}
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      spanText="or Sign Up"
      orModal={handleRegisterModal}
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
    </ModalWithForm>
  );
};

export default LoginModal;
