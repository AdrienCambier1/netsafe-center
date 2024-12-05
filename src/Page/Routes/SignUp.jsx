import { faHome, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleAuthentication,
  HeavyPurpleButton,
  GrayButton,
  RadioButton,
  RadioAnswerButton,
  TextPurpleButton,
} from "../../Components/Buttons";
import { TextInput } from "../../Components/Inputs";
import { SecondTitle } from "../../Components/Titles";
import { HalfWhiteCard } from "../../Components/Cards";
import { OrSplitter } from "../../Components";
import { RawBackground } from "../../Components/Backgrounds";
import LoginBackground from "../../Images/background_login.png";
import { Link } from "react-router-dom";
import { ModalContext } from "../../Contexts";
import { useContext, useEffect, useState } from "react";
import { DefaultText, SmallerDarkText } from "../../Components/Texts";

export default function SignUp() {
  const { resetModals } = useContext(ModalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [connectionState, setConnectionState] = useState("email");

  useEffect(() => {
    resetModals();
  }, [resetModals]);

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
        <DefaultText value="Déjà un compte ? ">
          <Link to="/login" className="text-purple-500 font-bold underline">
            Se connecter
          </Link>
        </DefaultText>
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
        <DefaultText value="Déjà un compte ? ">
          <Link to="/login" className="text-purple-500 font-bold underline">
            Se connecter
          </Link>
        </DefaultText>
      </>
    );
  };

  return (
    <RawBackground>
      <HalfWhiteCard image={LoginBackground}>
        <div className="absolute top-2 right-2">
          <GrayButton link="/" icon={faHome}></GrayButton>
        </div>
        <SecondTitle value="Inscrivez-vous" />
        <form className="flex flex-col gap-4 items-center w-full">
          {connectionState === "email"
            ? EmailForm()
            : connectionState === "password"
            ? PasswordForm()
            : null}
        </form>
      </HalfWhiteCard>
    </RawBackground>
  );
}
