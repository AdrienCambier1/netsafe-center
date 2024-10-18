import { faHome, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleAuthentication,
  HeavyPurpleButton,
  GrayButton,
} from "../../Components/Buttons";
import { AuthenticationInput } from "../../Components/Inputs";
import { SecondTitle } from "../../Components/Titles";
import { HalfWhiteCard } from "../../Components/Cards";
import OrSplitter from "../../Components/OrSplitter";
import { PurpleGradientBackground } from "../../Components/Backgrounds";
import LoginBackground from "../../Images/background_login.png";

export default function SignUp() {
  return (
    <PurpleGradientBackground>
      <HalfWhiteCard image={LoginBackground}>
        <div className="absolute top-2 right-2">
          <GrayButton link="/" icon={faHome}></GrayButton>
        </div>
        <SecondTitle value="Inscrivez-vous" />
        <form className="flex flex-col gap-4 items-center w-full">
          <GoogleAuthentication></GoogleAuthentication>
          <OrSplitter value="ou" />
          <AuthenticationInput value="Adresse e-mail" icon={faUser} />
          <AuthenticationInput
            value="Mot de passe"
            type="password"
            icon={faLock}
          />
          <HeavyPurpleButton value="S'inscrire"></HeavyPurpleButton>
          <p className="text-sm font-['Raleway'] text-zinc-600">
            Déjà un compte ?{" "}
            <a href="login" className="text-purple-500 font-bold underline">
              Se connecter
            </a>
          </p>
        </form>
      </HalfWhiteCard>
    </PurpleGradientBackground>
  );
}
