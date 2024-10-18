import { faHome } from "@fortawesome/free-solid-svg-icons";
import { HeavyPurpleButton, GrayButton } from "../../Components/Buttons";
import { SecondTitle } from "../../Components/Titles";
import { HalfWhiteCard } from "../../Components/Cards";
import { PurpleGradientBackground } from "../../Components/Backgrounds";
import Error404 from "../../Images/404.png";

export default function NotFound() {
  return (
    <PurpleGradientBackground>
      <HalfWhiteCard image={Error404}>
        <div className="absolute top-2 right-2">
          <GrayButton link="/" icon={faHome}></GrayButton>
        </div>
        <SecondTitle value="Page introuvable" />

        <p className="text-center text-sm font-['Raleway'] text-zinc-600">
          La page que vous recherchez n'éxiste pas
        </p>
        <HeavyPurpleButton
          value="Retour à l'accueil"
          link="/"
        ></HeavyPurpleButton>
      </HalfWhiteCard>
    </PurpleGradientBackground>
  );
}
