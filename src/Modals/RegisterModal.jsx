import {
  faHome,
  faUser,
  faLock,
  faCross,
  faCrosshairs,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  GrayButton,
  GoogleAuthentication,
  HeavyPurpleButton,
  RadioButton,
} from "../Components/Buttons";
import { TextInput } from "../Components/Inputs";
import { SecondTitle } from "../Components/Titles";
import { OrSplitter } from "../Components";
import { DefaultText } from "../Components/Texts";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { ModalCard } from "../Components/Cards";
import { useState, useContext, useEffect } from "react";
import { ModalContext } from "../Contexts";

export default function RegisterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [connectionState, setConnectionState] = useState("email");
  const { modals, toggleModal, setModalState } = useContext(ModalContext);

  const handleLogin = () => {
    toggleModal("loginModal");
    handleClose();
  };

  const handleClose = () => {
    setConnectionState("email");
    onClose();
  };

  const alreadyHaveAccount = () => {
    return (
      <DefaultText value="Déjà un compte ? ">
        <Link
          onClick={handleLogin}
          className="text-purple-500 font-bold underline"
        >
          Se connecter
        </Link>
      </DefaultText>
    );
  };

  const EmailForm = () => {
    return (
      <>
        <GoogleAuthentication />
        <OrSplitter value="ou" />
        <TextInput placeholder="Adresse e-mail" icon={faUser} />
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-2 items-center">
            <RadioButton is />
            <DefaultText value="J'ai lu et accepté la ">
              <Link className="text-purple-500 font-bold">
                Politique de confidentialité
              </Link>
            </DefaultText>
          </div>
        </div>
        <HeavyPurpleButton
          onClick={() => setConnectionState("password")}
          value="Suivant"
        />
        {alreadyHaveAccount()}
      </>
    );
  };

  const PasswordForm = () => {
    return (
      <>
        <TextInput placeholder="Mot de passe" type="password" icon={faLock} />
        <TextInput
          placeholder="Confirmation du mot de passe"
          type="password"
          icon={faLock}
        />
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-2 items-center">
            <RadioButton />
            <DefaultText value="Au moins 8 caractères" />
          </div>
          <div className="flex gap-2 items-center">
            <RadioButton />
            <DefaultText value="Un chiffre et un caractère spécial" />
          </div>
        </div>
        <HeavyPurpleButton value="S'inscrire" />
        {alreadyHaveAccount()}
      </>
    );
  };

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="flex fixed inset-0 items-center justify-center z-50 px-8">
        <ModalBackground isOpen={isOpen} onClick={onClose} />

        <ModalCard>
          <div className="absolute top-2 right-2">
            <GrayButton onClick={handleClose} icon={faXmark} />
          </div>
          <SecondTitle value="Inscrivez-vous" />
          <form className="flex flex-col gap-4 items-center w-full">
            {connectionState === "email"
              ? EmailForm()
              : connectionState === "password"
              ? PasswordForm()
              : null}
          </form>
        </ModalCard>
      </div>,
      document.querySelector("body")
    );
  } else {
    return null;
  }
}
