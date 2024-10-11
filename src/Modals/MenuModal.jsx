import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import HeavyPurpleButton from "../Components/HeavyPurpleButton";
import TitleMenu from "../Components/TitleMenu";
import HeaderButton from "../Components/HeaderButton";

export default function MenuModal({ isOpen, onClick }) {
  if (isOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <>
      <div
        onClick={onClick}
        className={`${
          isOpen ? "block lg:hidden" : "hidden"
        } w-full h-full fixed top-0 right-0 bg-black/50 transition-all ease-in-out`}
      ></div>

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
          <HeaderButton value="Espace de connaissance"></HeaderButton>
          <HeaderButton value="Outils pratiques"></HeaderButton>
          <HeaderButton value="Quizz d'apprentissage"></HeaderButton>
          <HeaderButton value="Cours"></HeaderButton>
        </div>
        <HeavyPurpleButton
          icon={faUser}
          value="Se connecter"
        ></HeavyPurpleButton>
      </div>
    </>
  );
}
