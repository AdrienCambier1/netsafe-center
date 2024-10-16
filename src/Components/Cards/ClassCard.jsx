import WhiteCard from "./WhiteCard";
import ThirdTitle from "../Titles/ThirdTitle";
import FourthTitle from "../Titles/FourthTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBook } from "@fortawesome/free-solid-svg-icons";
import HeavyPurpleButton from "../Buttons/HeavyPurpleButton";

export default function ClassCard({ title }) {
  return (
    <WhiteCard>
      <div className="flex justify-between md:flex-col items-center gap-4 p-2">
        <div className="flex md:flex-col w-full gap-4">
          <div className="bg-indigo-50 rounded-md flex items-center justify-center p-4 w-fit">
            <FontAwesomeIcon
              className=" p-4 rounded-full h-4 w-4 text-indigo-500"
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
          <HeavyPurpleButton icon={faArrowLeft} value="Commencer" />
        </div>
      </div>
    </WhiteCard>
  );
}
