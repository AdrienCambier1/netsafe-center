import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBook } from "@fortawesome/free-solid-svg-icons";
import { HeavyPurpleButton } from "../Buttons";
import { useEffect, useState } from "react";

export default function ClassCard({ title, button, status }) {
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
    <div className="bg-white rounded-xl p-2 shadow-md shadow-purple-200/50">
      <div className="h-full flex md:flex-col items-center justify-between gap-4 p-2">
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
        <div className="md:w-full">
          {isSmallScreen
            ? button && <HeavyPurpleButton icon={faArrowLeft} />
            : button && (
                <HeavyPurpleButton icon={faArrowLeft} value="Commencer" />
              )}
        </div>
      </div>
    </div>
  );
}
