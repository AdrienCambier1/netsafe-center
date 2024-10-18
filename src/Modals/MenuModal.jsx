import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import HeavyPurpleButton from "../Components/Buttons/HeavyPurpleButton";
import TitleMenu from "../Components/Titles/FourthTitle";
import HeaderButton from "../Components/Buttons/HeaderButton";
import Modalbackground from "../Components/Backgrounds/Modalbackground";

export default function MenuModal({ isOpen, onClick }) {
  return (
    <>
      <Modalbackground isOpen={isOpen} onClick={onClick} />

      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } p-4 top-0 right-0 w-60 h-full fixed bg-white transition-all ease-in-out block lg:hidden overflow-y-auto`}
      >
        <div className=" flex justify-between items-center">
          <HeavyPurpleButton icon={faClose} onClick={onClick} />
          <TitleMenu value="Bonjour toi"> </TitleMenu>
        </div>
        <div className="my-8 py-4 border-t border-gray-300/50 flex flex-col gap-2">
          <HeaderButton
            value="Espace de connaissance"
            link="knowledge-area"
          ></HeaderButton>
          <HeaderButton
            value="Outils pratiques"
            link="useful-tools"
          ></HeaderButton>
          <HeaderButton
            value="Quizz d'apprentissage"
            link="quizz-list"
          ></HeaderButton>
          <HeaderButton value="Cours" link="classes-list"></HeaderButton>
        </div>
        <HeavyPurpleButton
          icon={faUser}
          value="Se connecter"
          link="login"
        ></HeavyPurpleButton>
      </div>
    </>
  );
}
