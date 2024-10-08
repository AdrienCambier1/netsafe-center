import LightPurpleButton from "../../Components/LightPurpleButton";
import HeavyPurpleButton from "../../Components/HeavyPurpleButton";
import {
  faHouse,
  faPlus,
  faCaretLeft,
  faBook,
  faPenNib,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import WhiteCard from "../../Components/WhiteCard";
import MainTitle from "../../Components/MainTitle";
import TitleSection from "../../Components/TitleSection";
import GrayButton from "../../Components/GrayButton";
import RoundedGrayButton from "../../Components/RoundedGrayButton";

export default function Home() {
  return (
    <div className="min-h-screen w-full grid grid-cols-4 relative">
      <div className="col-span-1 relative flex flex-col gap-8 p-8 border-r border-gray-300/50">
        <div className="flex flex-col gap-2">
          <LightPurpleButton
            icon={faHouse}
            value="Accueil"
            link="/"
          ></LightPurpleButton>
          <LightPurpleButton
            icon={faBook}
            value="Vos cours"
            link="/"
          ></LightPurpleButton>
        </div>
        <div className="flex flex-col gap-2">
          <TitleSection value="Cours actuels"></TitleSection>
          <LightPurpleButton
            icon={faCaretLeft}
            value="Accueil"
            link="/"
          ></LightPurpleButton>
          <LightPurpleButton
            icon={faCaretLeft}
            value="Vos cours"
            link="/"
          ></LightPurpleButton>
        </div>
        <HeavyPurpleButton
          icon={faPenNib}
          value="Testez vos connaissances"
        ></HeavyPurpleButton>
      </div>
      <div className="col-span-2 relative flex flex-col gap-4 p-8">
        <WhiteCard>
          <div className="flex items-center justify-between">
            <p className="text-zinc-400 font-['Raleway'] font-medium text-sm">
              Ajoutez une actualité
            </p>
            <HeavyPurpleButton icon={faPlus}></HeavyPurpleButton>
          </div>
        </WhiteCard>
        <WhiteCard>
          <div className="flex flex-col p-2">
            <MainTitle value="Test test"></MainTitle>
            <RoundedGrayButton
              icon={faComment}
              value="test"
            ></RoundedGrayButton>
          </div>
        </WhiteCard>
      </div>
      <div className="col-span-1 relative flex flex-col gap-2 p-4 border-l border-gray-300/50"></div>
    </div>
  );
}
