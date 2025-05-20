import {
  faBars,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { MenuModal } from "../Modals";
import { useEffect, useContext } from "react";
import { GrayButton, HeaderButton } from "../Components/Buttons";
import { Link } from "react-router-dom";
import { ThemeContext, ModalContext, ConnectionContext } from "../Contexts";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const { isAuthenticated } = useContext(ConnectionContext);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setModalState("menuModal", false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="flex gap-4 h-full items-center relative overflow-hidden">
        <Link to="/" onClick={() => ScrollToTop()} className="logo">
          Netsafe Center
        </Link>
      </div>
      <div className="hidden lg:flex gap-4 h-full items-center relative">
        <HeaderButton
          value="Espace de connaissance"
          link="/knowledge_area"
          onClick={() => ScrollToTop()}
        />
        <HeaderButton
          value="Outils pratiques"
          link="/useful_tools"
          onClick={() => ScrollToTop()}
        />
        <HeaderButton
          value="Quiz d'apprentissage"
          link="/quiz_list"
          onClick={() => ScrollToTop()}
          connectionRequired={true}
        />
        <HeaderButton
          value="Cours"
          link="/classes_list"
          onClick={() => ScrollToTop()}
          connectionRequired={true}
        />
      </div>
      <div className="flex gap-2 lg:gap-4 h-full items-center">
        <div className="hidden lg:block">
          {theme === "dark" ? (
            <GrayButton icon={faSun} onClick={() => setTheme("light")} />
          ) : (
            <GrayButton icon={faMoon} onClick={() => setTheme("dark")} />
          )}
        </div>
        <GrayButton
          icon={faComment}
          background={true}
          link="/forum/recent_posts"
          onClick={() => ScrollToTop()}
        />
        {isAuthenticated === true ? (
          <GrayButton
            icon={faUser}
            background={true}
            link="/account_center/account_overview"
            onClick={() => ScrollToTop()}
          />
        ) : (
          <GrayButton
            icon={faUser}
            background={true}
            onClick={() => toggleModal("loginModal")}
          />
        )}
        <div className="block lg:hidden">
          <GrayButton
            onClick={() => setModalState("menuModal", true)}
            icon={faBars}
          />
        </div>
      </div>
      <MenuModal
        isOpen={modals["menuModal"]}
        onClose={() => setModalState("menuModal", false)}
      />
    </header>
  );
}
