import { faUser, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  GrayButton,
  GoogleAuthentication,
  HeavyPurpleButton,
} from "../Components/Buttons";
import { TextInput } from "../Components/Inputs";
import { OrSplitter } from "../Components";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ModalBackground } from "../Components";
import { useContext, useState } from "react";
import { ModalContext, ConnectionContext } from "../Contexts";
import ReactFocusLock from "react-focus-lock";

export default function LoginModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { toggleModal, setModalState } = useContext(ModalContext);
  const { setConnection } = useContext(ConnectionContext);

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  const handleRegister = () => {
    onClose();
    toggleModal("registerModal");
    resetForm();
  };

  const resetForm = () => {
    setFormData({ email: "", password: "" });
  };

  const handleConnectionSubmit = async (e) => {
    e.preventDefault();

    if (!isSubmitDisabled) {
      await handleConnection();
    }
  };

  const handleConnection = async () => {
    try {
      setModalState("isLoading", true);

      const { email, password } = formData;
      const requestBody = {
        username: email,
        password: password,
      };

      const response = await fetch(
        "https://netsafe-center-backend.vercel.app/Login/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(response);
      }

      const data = await response.json();
      if (data.success) {
        setConnection(true);
        setModalState("loginAlert", true);
        setModalState("menuModal", false);
        resetForm();
        onClose();
      } else {
        setModalState("tryLoginAlert", true);
      }
    } catch (error) {
      setModalState("tryLoginAlert", true);
    } finally {
      setModalState("isLoading", false);
    }
  };

  const isSubmitDisabled = !formData.email || !formData.password;

  return ReactDOM.createPortal(
    <div className={`${isOpen ? "visible" : "invisible"} z-30 center-modal`}>
      <ModalBackground isOpen={isOpen} onClick={handleClose} />
      <ReactFocusLock
        disabled={!isOpen}
        className={`${isOpen ? "opacity-100" : "opacity-0"} modal-card`}
      >
        <div className="absolute top-2 right-2">
          <GrayButton onClick={handleClose} icon={faXmark} />
        </div>
        <h2 className="second-title">Connectez-vous</h2>
        <form
          onSubmit={handleConnectionSubmit}
          className="flex flex-col gap-4 items-center w-full"
        >
          <GoogleAuthentication />
          <OrSplitter value="ou" />
          <TextInput
            placeholder="Adresse e-mail"
            type="text"
            icon={faUser}
            value={formData.email}
            onChange={handleChange("email")}
          />
          <TextInput
            placeholder="Mot de passe"
            type="password"
            icon={faLock}
            value={formData.password}
            onChange={handleChange("password")}
          />
          <button
            className="heavy-purple-btn justify-center"
            type="submit"
            disabled={isSubmitDisabled}
          >
            Se connecter
          </button>

          <p className="default-text">
            Pas de compte ?{" "}
            <Link onClick={handleRegister} className="text-purple underline">
              S'inscrire
            </Link>
          </p>
        </form>
      </ReactFocusLock>
    </div>,

    document.querySelector("body")
  );
}
