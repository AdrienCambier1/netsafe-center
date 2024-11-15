import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import { HeavyPurpleButton, HeaderButton } from "../Components/Buttons";
import { FourthTitle } from "../Components/Titles";
import { ModalBackground } from "../Components/Backgrounds";

export default function MenuModal({ isOpen, onClick }) {
  return (
    <>
      <ModalBackground isOpen={isOpen} onClick={onClick} />

      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } p-4 top-0 right-0 w-60 h-full fixed border-l border-transparent dark:border-zinc-700 dark:bg-zinc-900 bg-white transition-all ease-in-out block lg:hidden overflow-y-auto`}
      >
        <div className=" flex justify-between items-center">
          <HeavyPurpleButton icon={faClose} onClick={onClick} />
          <FourthTitle value="Bonjour toi" />
        </div>
        <div className="my-8 py-4 border-t dark:border-zinc-700 border-gray-300/50 flex flex-col gap-2">
          <HeaderButton
            value="Espace de connaissance"
            link="/knowledge_area"
            onClick={onClick}
          />
          <HeaderButton
            value="Outils pratiques"
            link="/useful_tools"
            onClick={onClick}
          />
          <HeaderButton
            value="Quizz d'apprentissage"
            link="/quiz_list"
            onClick={onClick}
          />
          <HeaderButton value="Cours" link="/classes_list" onClick={onClick} />
        </div>
        <HeavyPurpleButton
          icon={faUser}
          value="Se connecter"
          link="/login"
          onClick={onClick}
        />
      </div>
    </>
  );
}
