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
  const [confidentiality, setConfidentiality] = useState(false);

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
    setConnectionState("email");
    setConfidentiality(false);
  };

  const isSubmitEmailDisabled = !email || !confidentiality;
  const isSubmitPasswordDisabled = !password || !passwordConfirmation;

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
        <TextInput
          placeholder="Adresse e-mail"
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
            <DefaultText value="Au moins 8 caractères" />
          </div>
          <div className="flex gap-2 items-center">
            <RadioButton />
            <DefaultText value="Un chiffre et un caractère spécial" />
          </div>
        </div>
        <HeavyPurpleButton
          value="S'inscrire"
          disabled={isSubmitPasswordDisabled}
        />
        {alreadyHaveAccount()}
      </>
    );
  };

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="flex fixed inset-0 items-center justify-center z-50 px-8">
        <ModalBackground isOpen={isOpen} onClick={handleClose} />
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
