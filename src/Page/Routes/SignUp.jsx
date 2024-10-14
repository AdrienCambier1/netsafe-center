import { faHome, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import GoogleAuthentication from "../../Components/GoogleAuthentication";
import HeavyPurpleButton from "../../Components/HeavyPurpleButton";
import InputAuthentication from "../../Components/InputAuthentication";
import MainTitle from "../../Components/MainTitle";
import LoginBackground from "../../Images/background_login.png";
import OrSplitter from "../../Components/OrSplitter";
import GrayButton from "../../Components/GrayButton";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-50 to-purple-100 absolute h-screen w-screen z-40 top-0 left-0 p-8">
      <div className="bg-white rounded-xl shadow-md shadow-purple-200/50 flex overflow-hidden h-fit max-h-full max-w-full">
        <img
          className="hidden md:block w-96 object-cover"
          src={LoginBackground}
        ></img>

        <div className="flex flex-col items-center gap-8 p-16 overflow-y-auto relative">
          <div className="absolute top-2 right-2">
            <GrayButton link="/" icon={faHome}></GrayButton>
          </div>
          <MainTitle value="Inscrivez-vous"></MainTitle>
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
        </div>
      </div>
    </div>
  );
}
