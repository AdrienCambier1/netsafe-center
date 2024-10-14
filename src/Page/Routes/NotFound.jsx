import { faHome } from "@fortawesome/free-solid-svg-icons";
import HeavyPurpleButton from "../../Components/HeavyPurpleButton";
import MainTitle from "../../Components/MainTitle";
import Error404 from "../../Images/404.png";
import GrayButton from "../../Components/GrayButton";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-50 to-purple-100 absolute h-screen w-screen z-40 top-0 left-0 p-8">
      <div className="bg-white rounded-xl shadow-md shadow-purple-200/50 flex overflow-hidden h-fit max-h-full max-w-full">
        <img className="hidden md:block w-96 object-cover" src={Error404}></img>

        <div className="flex flex-col items-center gap-8 p-16 overflow-y-auto relative">
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
        </div>
      </div>
    </div>
  );
}
