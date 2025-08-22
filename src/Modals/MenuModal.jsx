import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  HeavyPurpleButton,
  HeaderButton,
  GrayButton,
  IconPurpleButton,
} from "../Components/Buttons";
import { ModalBackground } from "../Components";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext, ModalContext, ConnectionContext } from "../Contexts";
import { useContext } from "react";
import ReactFocusLock from "react-focus-lock";

export default function MenuModal({ isOpen, onClose }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { modals, toggleModal } = useContext(ModalContext);
  const { isAuthenticated } = useContext(ConnectionContext);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClose = () => {
    onClose();
    ScrollToTop();
  };

  return (
    <div className={`${isOpen ? "visible" : "invisible"} z-30 fixed`}>
      <ModalBackground isOpen={isOpen} onClick={onClose} />
      <ReactFocusLock
        autoFocus={false}
        disabled={!isOpen || modals["loginModal"] || modals["registerModal"]}
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } p-4 top-0 right-0 w-60 max-w-full h-full fixed dark:bg-neutral-950 bg-white border-l border-transparent dark:border-neutral-800 transition block lg:hidden overflow-y-auto scrollbar-hide`}
      >
        <div className="flex justify-between items-center">
          <IconPurpleButton icon={faClose} onClick={onClose} />
          <div className="flex gap-2 items-center">
            <h4>Menu</h4>
            {theme === "dark" ? (
              <GrayButton icon={faSun} onClick={() => setTheme("light")} />
            ) : (
              <GrayButton icon={faMoon} onClick={() => setTheme("dark")} />
            )}
          </div>
        </div>
        <div className="my-8 py-4 border-t border-color flex flex-col gap-2">
          <HeaderButton
            value="Espace de connaissance"
            link="/knowledge_area"
            onClick={() => handleClose()}
          />
          <HeaderButton
            value="Outils pratiques"
            link="/useful_tools"
            onClick={() => handleClose()}
          />
          <HeaderButton
            value="Quiz d'apprentissage"
            link="/quiz_list"
            onClick={() => handleClose()}
            connectionRequired={true}
          />
          <HeaderButton
            value="Cours"
            link="/classes_list"
            onClick={() => handleClose()}
            connectionRequired={true}
          />
        </div>
        {isAuthenticated === true ? (
          <HeavyPurpleButton
            icon={faUser}
            value="Votre profil"
            link="/account_center/account_overview"
            onClick={() => handleClose()}
          />
        ) : (
          <HeavyPurpleButton
            icon={faUser}
            value="Se connecter"
            onClick={() => toggleModal("loginModal")}
          />
        )}
      </ReactFocusLock>
    </div>
  );
}
