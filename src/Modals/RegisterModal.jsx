import { faUser, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  GrayButton,
  GoogleAuthentication,
  HeavyPurpleButton,
  RadioButton,
} from "../Components/Buttons";
import { TextInput } from "../Components/Inputs";
import { OrSplitter } from "../Components";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { useState, useContext } from "react";
import { ModalContext, ConnectionContext } from "../Contexts";

export default function RegisterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [connectionState, setConnectionState] = useState("email");
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const [confidentiality, setConfidentiality] = useState(false);
  const { setConnection } = useContext(ConnectionContext);

  const handleRegister = async () => {
    try {
      setModalState("isLoading", true);

      const requestBody = {
        identifiant: user,
        mail: email,
        password: password,
      };

      const response = await fetch("http://localhost:3000/Login/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(response);
      }

      const data = await response.json();
      if (data.success) {
        setConnection(true);
        setModalState("registerAlert", true);
        setModalState("menuModal", false);
        resetForm();
        onClose();
      } else {
        setModalState("tryRegisterAlert", true);
      }
    } catch (error) {
      setModalState("tryRegisterAlert", true);
    } finally {
      setModalState("isLoading", false);
    }
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
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
    setUser("");
    setConnectionState("email");
    setConfidentiality(false);
  };

  const isSubmitEmailDisabled = !email || !confidentiality;
  const isSubmitPasswordDisabled = !password || !passwordConfirmation;

  const alreadyHaveAccount = () => {
    return (
      <p className="default-text">
        Déjà un compte ?{" "}
        <Link
          onClick={handleLogin}
          className="text-purple-500 font-bold underline"
        >
          Se connecter
        </Link>
      </p>
    );
  };

  const EmailForm = () => {
    return (
      <>
        <GoogleAuthentication />
        <OrSplitter value="ou" />
        <TextInput
          placeholder="Adresse e-mail"
          type="email"
          icon={faUser}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-2 items-center">
            <RadioButton
              isChecked={confidentiality}
              onClick={() => setConfidentiality(!confidentiality)}
            />
            <p className="default-text">
              J'ai lu et accepté la{" "}
              <Link className="text-purple-500 font-bold">
                Politique de confidentialité
              </Link>
            </p>
          </div>
        </div>
        <HeavyPurpleButton
          onClick={() => setConnectionState("password")}
          value="Suivant"
          disabled={isSubmitEmailDisabled}
        />
        {alreadyHaveAccount()}
      </>
    );
  };

  const PasswordForm = () => {
    return (
      <>
        <TextInput
          placeholder="Nom d'utilisateur"
          icon={faUser}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <OrSplitter value="et" />
        <TextInput
          placeholder="Mot de passe"
          type="password"
          icon={faLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          placeholder="Confirmation du mot de passe"
          type="password"
          icon={faLock}
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-2 items-center">
            <RadioButton />
            <p className="default-text">Au moins 8 caractères</p>
          </div>
          <div className="flex gap-2 items-center">
            <RadioButton />
            <p className="default-text">Un chiffre et un caractère spécial</p>
          </div>
        </div>
        <HeavyPurpleButton
          value="S'inscrire"
          disabled={isSubmitPasswordDisabled}
          onClick={handleRegister}
        />
        {alreadyHaveAccount()}
      </>
    );
  };

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="flex fixed inset-0 items-center justify-center z-50 px-8">
        <ModalBackground isOpen={isOpen} onClick={handleClose} />
        <div className="modal-card">
          <div className="absolute top-2 right-2">
            <GrayButton onClick={handleClose} icon={faXmark} />
          </div>
          <h2 className="second-title">Inscrivez-vous</h2>
          <form className="flex flex-col gap-4 items-center w-full">
            {connectionState === "email"
              ? EmailForm()
              : connectionState === "password"
              ? PasswordForm()
              : null}
          </form>
        </div>
      </div>,
      document.querySelector("body")
    );
  } else {
    return null;
  }
}
