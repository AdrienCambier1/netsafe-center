import { faHome, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleAuthentication,
  HeavyPurpleButton,
  GrayButton,
} from "../../Components/Buttons";
import { TextInput } from "../../Components/Inputs";
import { SecondTitle } from "../../Components/Titles";
import { HalfWhiteCard } from "../../Components/Cards";
import { OrSplitter } from "../../Components";
import { RawBackground } from "../../Components/Backgrounds";
import LoginBackground from "../../Images/background_login.png";
import { Link } from "react-router-dom";
import { ModalContext } from "../../Contexts";
import { useContext, useEffect } from "react";

export default function SignUp() {
  const { modals, toggleModal, setModalState, resetModals } =
    useContext(ModalContext);

  useEffect(() => {
    resetModals();
  }, []);

  return (
    <RawBackground>
      <HalfWhiteCard image={LoginBackground}>
        <div className="absolute top-2 right-2">
          <GrayButton link="/" icon={faHome}></GrayButton>
        </div>
        <SecondTitle value="Inscrivez-vous" />
        <form className="flex flex-col gap-4 items-center w-full">
          <GoogleAuthentication />
          <OrSplitter value="ou" />
          <TextInput placeholder="Adresse e-mail" icon={faUser} />
          <TextInput placeholder="Mot de passe" type="password" icon={faLock} />
          <HeavyPurpleButton value="S'inscrire" />
          <p className="text-sm font-['Raleway'] dark:text-zinc-400 text-zinc-600">
            Déjà un compte ?{" "}
            <Link to="/login" className="text-purple-500 font-bold underline">
              Se connecter
            </Link>
          </p>
        </form>
      </HalfWhiteCard>
    </RawBackground>
  );
}
