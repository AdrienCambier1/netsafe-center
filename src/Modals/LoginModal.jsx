import { faUser, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import { GrayButton, GoogleAuthentication } from "../Components/Buttons";
import { TextInput } from "../Components/Inputs";
import { OrSplitter } from "../Components";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { ModalBackground } from "../Components";
import { useContext, useState } from "react";
import { ModalContext, ConnectionContext } from "../Contexts";
import ReactFocusLock from "react-focus-lock";

export default function LoginModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { toggleModal, setModalState } = useContext(ModalContext);
  const { login } = useContext(ConnectionContext);
  const navigate = useNavigate();

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
    setModalState("isLoading", true);

    const response = await login(formData.email, formData.password);

    if (response.success) {
      navigate("/");
      setModalState("loginAlert", true);
      setModalState("menuModal", false);
      onClose();
      resetForm();
    } else {
      setModalState("tryLoginAlert", true);
    }

    setModalState("isLoading", false);
  };

  const isSubmitDisabled = !formData.email || !formData.password;

  return ReactDOM.createPortal(
    <div className={`${isOpen ? "visible" : "invisible"} z-30 center-modal`}>
      <ModalBackground isOpen={isOpen} onClick={handleClose} />
      <ReactFocusLock
        autoFocus={false}
        disabled={!isOpen}
        className={`${isOpen ? "opacity-100" : "opacity-0"} modal-card`}
      >
        <div className="absolute top-2 right-2">
          <GrayButton onClick={handleClose} icon={faXmark} />
        </div>
        <h2>Connectez-vous</h2>
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
