import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import MenuModal from "../Modals/MenuModal";
import { useEffect, useState } from "react";
import { GrayButton, HeaderButton } from "../Components/Buttons";

export default function Header() {
  const [OpenMenu, setOpenMenu] = useState(false);

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
    <header className="z-10 fixed bg-white shadow-md shadow-purple-200/50 h-16 w-full flex items-center justify-between px-8">
      <div className="flex gap-4 h-full items-center relative">
        <a href="/">
          <p
            className="text-lg text-zinc-800 font-['Raleway'] font-medium uppercase"
            value="Netsafe Center"
          >
            Netsafe Center
          </p>
        </a>
      </div>
      <div className="hidden lg:flex gap-4 h-full items-center relative">
        <HeaderButton value="Espace de connaissance" link="/knowledge-area" />
        <HeaderButton value="Outils pratiques" link="/useful-tools" />
        <HeaderButton value="Quizz d'apprentissage" link="/quizz-list" />
        <HeaderButton value="Cours" link="/classes-list" />
      </div>
      <div className="flex gap-2 lg:gap-4 h-full items-center">
        <GrayButton icon={faComment} background={true} link="/forum" />
        <GrayButton icon={faUser} background={true} link="/login" />
        <div className="block lg:hidden">
          <GrayButton onClick={toggleOpenMenu} className="none" icon={faBars} />
        </div>
      </div>
      <MenuModal isOpen={OpenMenu} onClick={toggleOpenMenu} />
    </header>
  );
}
