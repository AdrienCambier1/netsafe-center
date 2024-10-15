import { faHome, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import GoogleAuthentication from "../../Components/Buttons/GoogleAuthentication";
import HeavyPurpleButton from "../../Components/Buttons/HeavyPurpleButton";
import InputAuthentication from "../../Components/InputAuthentication";
import SecondTitle from "../../Components/Titles/SecondTitle";
import LoginBackground from "../../Images/background_login.png";
import OrSplitter from "../../Components/OrSplitter";
import GrayButton from "../../Components/Buttons/GrayButton";
import PurpleGradientBackground from "../../Components/Backgrounds/PurpleGradientBackground";
import HalfWhiteCard from "../../Components/Cards/HalfWhiteCard";

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
          <InputAuthentication value="Adresse e-mail" icon={faUser} />
          <InputAuthentication
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
