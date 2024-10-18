import { faHome, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleAuthentication,
  HeavyPurpleButton,
  GrayButton,
} from "../../Components/Buttons";
import { AuthenticationInput } from "../../Components/Inputs";
import { SecondTitle } from "../../Components/Titles";
import { HalfWhiteCard } from "../../Components/Cards";
import { PurpleGradientBackground } from "../../Components/Backgrounds";
import OrSplitter from "../../Components/OrSplitter";
import LoginBackground from "../../Images/background_login.png";

export default function Login() {
  return (
    <PurpleGradientBackground>
      <HalfWhiteCard image={LoginBackground}>
        <div className="absolute top-2 right-2">
          <GrayButton link="/" icon={faHome}></GrayButton>
        </div>
        <SecondTitle value="Connectez-vous" />
        <form className="flex flex-col gap-4 items-center w-full">
          <GoogleAuthentication></GoogleAuthentication>
          <OrSplitter value="ou" />
          <AuthenticationInput value="Adresse e-mail" icon={faUser} />
          <AuthenticationInput
            value="Mot de passe"
            type="password"
            icon={faLock}
          />
          <HeavyPurpleButton value="Se connecter"></HeavyPurpleButton>
          <p className="text-sm font-['Raleway'] text-zinc-600">
            Pas de compte ?{" "}
            <a href="sign-up" className="text-purple-500 font-bold underline">
              S'inscrire
            </a>
          </p>
        </form>
      </HalfWhiteCard>
    </PurpleGradientBackground>
  );
}
