import { faHome, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleAuthentication,
  HeavyPurpleButton,
  GrayButton,
} from "../../Components/Buttons";
import { TextInput } from "../../Components/Inputs";
import { SecondTitle } from "../../Components/Titles";
import { HalfWhiteCard } from "../../Components/Cards";
import { RawBackground } from "../../Components/Backgrounds";
import { OrSplitter } from "../../Components";
import LoginBackground from "../../Images/background_login.png";
import { Link } from "react-router-dom";
import { ModalContext } from "../../Contexts";
import { useContext, useEffect } from "react";
import { DefaultText } from "../../Components/Texts";

export default function Login() {
  const { resetModals } = useContext(ModalContext);

  useEffect(() => {
    resetModals();
  }, [resetModals]);

  return (
    <RawBackground>
      <HalfWhiteCard image={LoginBackground}>
        <div className="absolute top-2 right-2">
          <GrayButton link="/" icon={faHome}></GrayButton>
        </div>
        <SecondTitle value="Connectez-vous" />
        <form className="flex flex-col gap-4 items-center w-full">
          <GoogleAuthentication />
          <OrSplitter value="ou" />
          <TextInput placeholder="Adresse e-mail" icon={faUser} />
          <TextInput placeholder="Mot de passe" type="password" icon={faLock} />
          <HeavyPurpleButton value="Se connecter" />
          <DefaultText value="Pas de compte ?">
            <Link
              to="/register"
              className="text-purple-500 font-bold underline"
            >
              {" "}
              S'inscrire
            </Link>
          </DefaultText>
        </form>
      </HalfWhiteCard>
    </RawBackground>
  );
}
