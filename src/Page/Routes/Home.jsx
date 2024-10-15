import LightPurpleButton from "../../Components/Buttons/LightPurpleButton";
import HeavyPurpleButton from "../../Components/Buttons/HeavyPurpleButton";
import {
  faHouse,
  faPlus,
  faCaretLeft,
  faBook,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import WhiteCard from "../../Components/Cards/WhiteCard";
import FourthTitle from "../../Components/Titles/FourthTitle";
import ConnectedState from "../../Components/Cards/ConnectedState";
import NewsCard from "../../Components/Cards/NewsCard";

export default function Home() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 sm:grid-rows-2 lg:grid-rows-1 relative">
      <div className="col-span-1 relative top-0 flex flex-col gap-8 p-8 lg:border-r border-gray-300/50">
        <div className="flex flex-col gap-2">
          <LightPurpleButton
            icon={faHouse}
            value="Accueil"
            link="/"
          ></LightPurpleButton>
          <LightPurpleButton
            icon={faBook}
            value="Vos cours"
          ></LightPurpleButton>
        </div>
        <div className="flex flex-col gap-2">
          <FourthTitle value="Cours actuels" />
          <LightPurpleButton
            icon={faCaretLeft}
            value="Accueil"
          ></LightPurpleButton>
          <LightPurpleButton
            icon={faCaretLeft}
            value="Vos cours"
          ></LightPurpleButton>
        </div>
        <HeavyPurpleButton
          icon={faPenNib}
          value="Testez vos connaissances"
        ></HeavyPurpleButton>
      </div>

      <div className="lg:col-span-2 relative flex flex-col gap-4 p-8 sm:border-l lg:border-none border-gray-300/50 row-span-1 sm:row-span-2 lg:row-span-1">
        <WhiteCard>
          <div className="flex items-center justify-between">
            <p className="text-zinc-400 font-['Raleway'] font-medium text-sm">
              Ajouter un poste
            </p>
            <HeavyPurpleButton icon={faPlus}></HeavyPurpleButton>
          </div>
        </WhiteCard>
        <NewsCard
          title="Poste 1"
          content="Bonjour, j'aime les enfants"
        ></NewsCard>
        <NewsCard
          title="Poste 1"
          content="Bonjour, j'aime les enfants"
        ></NewsCard>
        <NewsCard
          title="Poste 1"
          content="Bonjour, j'aime les enfants"
        ></NewsCard>
      </div>
      <div className="col-span-1 relative flex flex-col gap-4 p-8 lg:border-l border-gray-300/50">
        <ConnectedState value={true} link="account-center"></ConnectedState>
      </div>
    </div>
  );
}
