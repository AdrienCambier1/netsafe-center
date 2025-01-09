import { faUser, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  GrayButton,
  GoogleAuthentication,
  HeavyPurpleButton,
} from "../Components/Buttons";
import { TextInput } from "../Components/Inputs";
import { SecondTitle } from "../Components/Titles";
import { OrSplitter } from "../Components";
import { DefaultText } from "../Components/Texts";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { ModalCard } from "../Components/Cards";
import { useContext, useState } from "react";
import { ModalContext, ConnectionContext } from "../Contexts";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { modals, toggleModal, setModalState, resetModals } =
    useContext(ModalContext);
  const { setConnection } = useContext(ConnectionContext);

  const handleConnection = async () => {
    try {
      setModalState("isLoading", true);

      const requestBody = {
        username: email,
        password: password,
      };

      const response = await fetch("http://localhost:3000/Login/login", {
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

  const handleRegister = () => {
    onClose();
    toggleModal("registerModal");
    resetForm();
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const isSubmitDisabled = !email || !password;

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="z-30 center-modal">
        <ModalBackground isOpen={isOpen} onClick={handleClose} />
        <ModalCard>
          <div className="absolute top-2 right-2">
            <GrayButton onClick={handleClose} icon={faXmark} />
          </div>
          <SecondTitle value="Connectez-vous" />
          <form className="flex flex-col gap-4 items-center w-full">
            <GoogleAuthentication />
            <OrSplitter value="ou" />
            <TextInput
              placeholder="Adresse e-mail"
              type="email"
              icon={faUser}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              placeholder="Mot de passe"
              type="password"
              icon={faLock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <HeavyPurpleButton
              value="Se connecter"
              disabled={isSubmitDisabled}
              onClick={handleConnection}
              link="/"
            />
            <DefaultText value="Pas de compte ? ">
              <Link
                onClick={handleRegister}
                className="text-purple-500 font-bold underline"
              >
                S'inscrire
              </Link>
            </DefaultText>
          </form>
        </ModalCard>
      </div>,

      document.querySelector("body")
    );
  } else {
    return null;
  }
}
