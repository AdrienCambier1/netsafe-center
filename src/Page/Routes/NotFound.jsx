import { faHome } from "@fortawesome/free-solid-svg-icons";
import { HeavyPurpleButton, GrayButton } from "../../Components/Buttons";
import { SecondTitle, DefaultText } from "../../Components/Titles";
import { HalfWhiteCard } from "../../Components/Cards";
import { RawBackground } from "../../Components/Backgrounds";
import Error404 from "../../Images/404.png";

export default function NotFound() {
  return (
    <RawBackground>
      <HalfWhiteCard image={Error404}>
        <div className="absolute top-2 right-2">
          <GrayButton link="/" icon={faHome} />
        </div>
        <SecondTitle value="Page introuvable" />

        <DefaultText value="La page que vous recherchez n'éxiste pas" />
        <HeavyPurpleButton value="Retour à l'accueil" link="/" />
      </HalfWhiteCard>
    </RawBackground>
  );
}
