import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { HeavyPurpleButton, IconPurpleButton } from "../Buttons";
import { useEffect, useState } from "react";
import { DefaultText, ColoredText } from "../Texts";

export default function QuizCard({ title, level, difficulty, link }) {
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
    <div className="dark:bg-neutral-950 border dark:border-neutral-800 border-transparent bg-white rounded-xl p-2 dark:shadow-none shadow-md shadow-gray-200/50">
      <div className="h-full flex md:flex-col items-center justify-between gap-4 p-2">
        <div className="flex md:flex-col w-full gap-4">
          <div className="dark:bg-yellow-950 bg-yellow-50 rounded-full flex items-center justify-center p-4 w-fit">
            <FontAwesomeIcon
              className=" p-4 h-4 w-4 text-yellow-500"
              icon={faLightbulb}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <ColoredText
              value={`Niveau ${level} | ${difficulty}`}
              color="yellow-500"
            />
            <DefaultText value={title} />
          </div>
        </div>
        <div className="items-end md:w-full flex flex-col gap-4">
          {isSmallScreen ? (
            <IconPurpleButton icon={faArrowLeft} link={link} />
          ) : (
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
