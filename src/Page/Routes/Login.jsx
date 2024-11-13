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

export default function Login() {
  return (
    <RawBackground>
      <HalfWhiteCard image={LoginBackground}>
        <div className="absolute top-2 right-2">
          <GrayButton link="/" icon={faHome}></GrayButton>
        </div>
        <SecondTitle value="Connectez-vous" />
        <form className="flex flex-col gap-4 items-center w-full">
          <GoogleAuthentication></GoogleAuthentication>
          <OrSplitter value="ou" />
          <TextInput placeholder="Adresse e-mail" icon={faUser} />
          <TextInput placeholder="Mot de passe" type="password" icon={faLock} />
          <HeavyPurpleButton value="Se connecter" />
          <p className="text-sm font-['Raleway'] text-zinc-600">
            Pas de compte ?{" "}
            <Link
              to="/register"
              className="text-purple-500 font-bold underline"
            >
              S'inscrire
            </Link>
          </p>
        </form>
      </HalfWhiteCard>
    </RawBackground>
  );
}
