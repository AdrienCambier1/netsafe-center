import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBook } from "@fortawesome/free-solid-svg-icons";
import { HeavyPurpleButton } from "../Buttons";
import { useEffect, useState } from "react";

export default function ClassCard({ title, button, status, link }) {
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
    <div className="bg-white rounded-xl p-2 shadow-md shadow-gray-200/50">
      <div
        className={`${
          status ? "flex-col" : null
        } h-full flex md:flex-col items-center justify-between gap-4 p-2`}
      >
        <div className="flex md:flex-col w-full gap-4">
          <div className="bg-indigo-50 rounded-full flex items-center justify-center p-4 w-fit">
            <FontAwesomeIcon
              className=" p-4 h-4 w-4 text-indigo-500"
              icon={faBook}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-indigo-500 font-['Raleway'] text-sm font-bold">
              Leçon en ligne
            </p>
            <p className="text-sm font-['Raleway'] font-medium text-zinc-600">
              {title}
            </p>
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
                <p className="text-zinc-400 font-['Raleway'] font-medium text-xs border-t border-gray-300/50 pt-2 w-full text-center">
                  Vous avez déjà terminé ce quiz
                </p>
                <div className="bg-teal-50 border-teal-100 text-teal-500 w-fit border rounded-full px-4 py-1 text-sm font-['Raleway']">
                  {status}
                </div>
              </>
            ) : status === "En cours" ? (
              <>
                <p className="text-zinc-400 font-['Raleway'] font-medium text-xs border-t border-gray-300/50 pt-2 w-full text-center">
                  Vous n'avez pas encore terminé le quizz
                </p>
                <div className="bg-red-50 border-red-100 text-red-500 w-fit border rounded-full px-4 py-1 text-sm font-['Raleway']">
                  {status}
                </div>
              </>
            ) : null)}
        </div>
      </div>
    </div>
  );
}
