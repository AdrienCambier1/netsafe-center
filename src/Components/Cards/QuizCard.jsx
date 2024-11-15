import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { HeavyPurpleButton } from "../Buttons";
import { useEffect, useState } from "react";
import { DefaultText, DarkText } from "../Titles";
import { Status } from "../Tags";

export default function QuizCard({
  title,
  level,
  difficulty,
  link,
  button,
  status,
}) {
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
    <div className="dark:bg-zinc-950 border dark:border-zinc-800 border-transparent bg-white rounded-xl p-2 dark:shadow-none shadow-md shadow-gray-200/50">
      <div
        className={`${
          status ? "flex-col" : null
        } h-full flex md:flex-col items-center justify-between gap-4 p-2`}
      >
        <div className="flex md:flex-col w-full gap-4">
          <div className="dark:bg-yellow-950 bg-yellow-50 rounded-full flex items-center justify-center p-4 w-fit">
            <FontAwesomeIcon
              className=" p-4 h-4 w-4 text-yellow-500"
              icon={faLightbulb}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-yellow-500 font-['Raleway'] text-sm font-bold">
              Niveau {level} | {difficulty}
            </p>
            <DefaultText value={title} />
          </div>
        </div>
        <div
          className={`${
            status ? "items-center w-full" : "items-end"
          } md:w-full flex flex-col gap-4`}
        >
          {isSmallScreen
            ? button && <HeavyPurpleButton icon={faArrowLeft} link={link} />
            : button && (
                <HeavyPurpleButton
                  icon={faArrowLeft}
                  value="Commencer"
                  link={link}
                />
              )}
          {status &&
            (status === "Complété" ? (
              <>
                <div className="border-t dark:border-zinc-800 border-gray-300/50 pt-2 w-full text-center">
                  <DarkText value="Vous avez déjà terminé ce quizz" />
                </div>
                <Status isOk={true} value={status} />
              </>
            ) : status === "En cours" ? (
              <>
                <div className="border-t dark:border-zinc-800 border-gray-300/50 pt-2 w-full text-center">
                  <DarkText value="Vous n'avez pas encore terminé le quizz" />
                </div>
                <Status isOk={false} value={status} />
              </>
            ) : null)}
        </div>
      </div>
    </div>
  );
}
