import {
  faUser,
  faLock,
  faXmark,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  GrayButton,
  GoogleAuthentication,
  RadioButton,
} from "../Components/Buttons";
import { TextInput } from "../Components/Inputs";
import { OrSplitter } from "../Components";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { ModalBackground } from "../Components";
import React, { useState, useContext, useEffect } from "react";
import { ModalContext, ConnectionContext } from "../Contexts";
import ReactFocusLock from "react-focus-lock";

export default function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    user: "",
    passwordConfirmation: "",
    confidentiality: false,
  });

  const [errors, setErrors] = useState({});
  const [connectionState, setConnectionState] = useState("email");
  const { toggleModal, setModalState } = useContext(ModalContext);
  const { register } = useContext(ConnectionContext);
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    toggleModal("loginModal");
    handleClose();
    resetForm();
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      email: "",
      user: "",
      password: "",
      passwordConfirmation: "",
      confidentiality: false,
    });
    setErrors({});
    setConnectionState("email");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!isSubmitEmailDisabled) {
      setConnectionState("password");
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (!isSubmitPasswordDisabled) {
      await handleRegister();
    }
  };

  const hasEightChars = (value) => {
    return value.length >= 8;
  };

  const hasNumberAndSpecial = (value) => {
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

    return hasNumber && hasSpecialChar;
  };

  const passwordMatch = () => {
    return formData.password === formData.passwordConfirmation;
  };

  const handleRegister = async () => {
    setModalState("isLoading", true);

    const response = await register(
      formData.user,
      formData.email,
      formData.password
    );

    if (response.success) {
      navigate("/");
      setModalState("registerAlert", true);
      setModalState("menuModal", false);
      onClose();
      resetForm();
    } else {
      setModalState("tryRegisterAlert", true);
    }

    setModalState("isLoading", false);
  };

  useEffect(() => {
    const isMatch = passwordMatch();

    setErrors((prevErrors) => {
      const newError = isMatch ? "" : "Les mots de passe ne correspondent pas";

      if (prevErrors.passwordConfirmation !== newError) {
        return { ...prevErrors, passwordConfirmation: newError };
      }
      return prevErrors;
    });
  }, [formData.password, formData.passwordConfirmation]);

  const isSubmitEmailDisabled = !formData.email || !formData.confidentiality;
  const isSubmitPasswordDisabled =
    !formData.user ||
    !formData.password ||
    !formData.passwordConfirmation ||
    !hasEightChars(formData.password) ||
    !hasNumberAndSpecial(formData.password) ||
    !passwordMatch();

  const EmailForm = () => {
    return (
      <form
        onSubmit={handleEmailSubmit}
        className="flex flex-col gap-4 items-center w-full"
      >
        <GoogleAuthentication />
        <OrSplitter value="ou" />
        <div className="w-full">
          <TextInput
            placeholder="Adresse e-mail"
            type="text"
            icon={faUser}
            value={formData.email}
            onChange={handleChange("email")}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-2 items-center">
            <RadioButton
              isChecked={formData.confidentiality}
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  confidentiality: !prev.confidentiality,
                }))
              }
            />
            <p className="default-text">
              J'ai lu et accepté la{" "}
              <Link className="text-purple">Politique de confidentialité</Link>
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="heavy-purple-btn justify-center"
          disabled={isSubmitEmailDisabled}
        >
          Suivant
        </button>
        {alreadyHaveAccount()}
      </form>
    );
  };

  const PasswordForm = () => {
    return (
      <form
        onSubmit={handlePasswordSubmit}
        className="flex flex-col gap-4 items-center w-full"
      >
        <div className="w-full">
          <TextInput
            placeholder="Nom d'utilisateur"
            icon={faUser}
            value={formData.user}
            onChange={handleChange("user")}
          />
        </div>
        <OrSplitter value="et" />
        <div className="w-full">
          <TextInput
            placeholder="Mot de passe"
            type="password"
            icon={faLock}
            value={formData.password}
            onChange={handleChange("password")}
          />
        </div>
        <div className="w-full">
          <TextInput
            placeholder="Confirmation du mot de passe"
            type="password"
            icon={faLock}
            value={formData.passwordConfirmation}
            onChange={handleChange("passwordConfirmation")}
            error={errors.passwordConfirmation}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-2 items-center">
            <RadioButton isChecked={hasEightChars(formData.password)} />
            <p className="default-text">Au moins 8 caractères</p>
          </div>
          <div className="flex gap-2 items-center">
            <RadioButton isChecked={hasNumberAndSpecial(formData.password)} />
            <p className="default-text">Un chiffre et un caractère spécial</p>
          </div>
        </div>
        <button
          type="submit"
          className="heavy-purple-btn justify-center"
          disabled={isSubmitPasswordDisabled}
        >
          S'inscrire
        </button>
        {alreadyHaveAccount()}
      </form>
    );
  };

  const alreadyHaveAccount = () => {
    return (
      <p className="default-text">
        Déjà un compte ?{" "}
        <Link onClick={handleLogin} className="text-purple underline">
          Se connecter
        </Link>
      </p>
    );
  };

  return ReactDOM.createPortal(
    <div className={`${isOpen ? "visible" : "invisible"} z-30 center-modal`}>
      <ModalBackground isOpen={isOpen} onClick={handleClose} />
      <ReactFocusLock
        autoFocus={false}
        disabled={!isOpen}
        className={`${isOpen ? "opacity-100" : "opacity-0"} modal-card`}
      >
        <div
          className={`absolute top-2 px-2 flex w-full ${
            connectionState === "email" ? "justify-end" : "justify-between"
          }`}
        >
          {connectionState === "password" && (
            <GrayButton
              onClick={() => setConnectionState("email")}
              icon={faArrowLeft}
            />
          )}
          <GrayButton onClick={handleClose} icon={faXmark} />
        </div>
        <h2>Inscrivez-vous</h2>
        {connectionState === "email"
          ? EmailForm()
          : connectionState === "password"
          ? PasswordForm()
          : null}
      </ReactFocusLock>
    </div>,
    document.querySelector("body")
  );
}
