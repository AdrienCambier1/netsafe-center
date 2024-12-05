import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  HeavyPurpleButton,
  HeaderButton,
  GrayButton,
} from "../Components/Buttons";
import { FourthTitle } from "../Components/Titles";
import { ModalBackground } from "../Components/Backgrounds";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext, ModalContext } from "../Contexts";
import { useContext } from "react";

export default function MenuModal({ isOpen, onClick }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { modals, toggleModal, setModalState } = useContext(ModalContext);

  return (
    <>
      <ModalBackground isOpen={isOpen} onClick={onClick} />

      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } p-4 top-0 right-0 w-60 max-w-full h-full fixed border-l border-transparent dark:border-neutral-800 dark:bg-neutral-950 bg-white transition-transform ease-in-out block lg:hidden overflow-y-auto`}
      >
        <div className="flex justify-between items-center">
          <HeavyPurpleButton icon={faClose} onClick={onClick} />
          <div className="flex gap-2 items-center">
            <FourthTitle value="Menu" />
            {theme === "dark" ? (
              <GrayButton icon={faSun} onClick={() => setTheme("light")} />
            ) : (
              <GrayButton icon={faMoon} onClick={() => setTheme("dark")} />
            )}
          </div>
        </div>
        <div className="my-8 py-4 border-t dark:border-neutral-800 border-neutral-200 flex flex-col gap-2">
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
          onClick={() => toggleModal("loginModal")}
        />
      </div>
    </>
  );
}
