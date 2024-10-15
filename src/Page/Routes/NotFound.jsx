import { faHome } from "@fortawesome/free-solid-svg-icons";
import HeavyPurpleButton from "../../Components/Buttons/HeavyPurpleButton";
import MainTitle from "../../Components/Titles/MainTitle";
import Error404 from "../../Images/404.png";
import GrayButton from "../../Components/Buttons/GrayButton";
import PurpleGradientBackground from "../../Components/PurpleGradientBackground";
import HalfWhiteCard from "../../Components/Cards/HalfWhiteCard";

export default function NotFound() {
  return (
    <PurpleGradientBackground>
      <HalfWhiteCard image={Error404}>
        <div className="absolute top-2 right-2">
          <GrayButton link="/" icon={faHome}></GrayButton>
        </div>
        <MainTitle value="Page introuvable"></MainTitle>

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
