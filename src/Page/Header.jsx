import {
  faBars,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { MenuModal } from "../Modals";
import { useEffect, useState, useContext } from "react";
import { GrayButton, HeaderButton } from "../Components/Buttons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts";

export default function Header() {
  const [OpenMenu, setOpenMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleOpenMenu = () => {
    setOpenMenu(!OpenMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="z-10 fixed dark:shadow-none dark:bg-zinc-900 border-b border-transparent dark:border-zinc-800 bg-white shadow-md shadow-gray-200/50 h-16 w-full flex items-center justify-between px-8">
      <div className="flex gap-4 h-full items-center relative">
        <Link to="/">
          <p className="text-lg dark:text-zinc-200 text-zinc-800 font-['Raleway'] font-medium uppercase">
            Netsafe Center
          </p>
        </Link>
      </div>
      <div className="hidden lg:flex gap-4 h-full items-center relative">
        <HeaderButton value="Espace de connaissance" link="/knowledge_area" />
        <HeaderButton value="Outils pratiques" link="/useful_tools" />
        <HeaderButton value="Quizz d'apprentissage" link="/quiz_list" />
        <HeaderButton value="Cours" link="/classes_list" />
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
        />
        <GrayButton icon={faUser} background={true} link="/login" />
        <div className="block lg:hidden">
          <GrayButton onClick={toggleOpenMenu} className="none" icon={faBars} />
        </div>
      </div>
      <MenuModal isOpen={OpenMenu} onClick={toggleOpenMenu} />
    </header>
  );
}
