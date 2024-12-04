import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBook } from "@fortawesome/free-solid-svg-icons";
import { HeavyPurpleButton } from "../Buttons";
import { useEffect, useState } from "react";
import { DefaultText, ColoredText } from "../Texts";

export default function ClassCard({ title, button, link }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dark:bg-zinc-900 bg-white rounded-xl p-2 border border-transparent dark:border-zinc-800 dark:shadow-none shadow-md shadow-gray-200/50">
      <div className="h-full flex md:flex-col items-center justify-between gap-4 p-2">
        <div className="flex md:flex-col w-full gap-4">
          <div className="dark:bg-indigo-950 bg-indigo-50 rounded-full flex items-center justify-center p-4 w-fit">
            <FontAwesomeIcon
              className=" p-4 h-4 w-4 text-indigo-500"
              icon={faBook}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <ColoredText value="Leçon en ligne" color="indigo-500" />
            <DefaultText value={title} />
          </div>
        </div>
        <div className="items-end md:w-full flex flex-col gap-4">
          {isSmallScreen
            ? button && <HeavyPurpleButton icon={faArrowLeft} link={link} />
            : button && (
                <HeavyPurpleButton
                  icon={faArrowLeft}
                  value="Commencer"
                  link={link}
                />
              )}
        </div>
      </div>
    </div>
  );
}
