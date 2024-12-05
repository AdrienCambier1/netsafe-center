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
} from "../Components/Buttons";
import { TextInput } from "../Components/Inputs";
import { SecondTitle } from "../Components/Titles";
import { OrSplitter } from "../Components";
import { DefaultText } from "../Components/Texts";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { ModalCard } from "../Components/Cards";
import { useContext } from "react";
import { ModalContext } from "../Contexts";

export default function LoginModal({ isOpen, onClose }) {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);

  const handleRegister = () => {
    onClose();
    toggleModal("registerModal");
  };

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="flex fixed inset-0 items-center justify-center z-50 px-8">
        <ModalBackground isOpen={isOpen} onClick={onClose} />
        <ModalCard>
          <div className="absolute top-2 right-2">
            <GrayButton onClick={onClose} icon={faXmark} />
          </div>
          <SecondTitle value="Connectez-vous" />
          <form className="flex flex-col gap-4 items-center w-full">
            <GoogleAuthentication />
            <OrSplitter value="ou" />
            <TextInput placeholder="Adresse e-mail" icon={faUser} />
            <TextInput
              placeholder="Mot de passe"
              type="password"
              icon={faLock}
            />
            <HeavyPurpleButton value="Se connecter" />
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
