import WhiteCard from "./WhiteCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import HeavyPurpleButton from "../Buttons/HeavyPurpleButton";

export default function QuizzCard({ title }) {
  return (
    <WhiteCard>
      <div className="flex justify-between md:flex-col items-center gap-4 p-2">
        <div className="flex md:flex-col w-full gap-4">
          <div className="bg-amber-50 rounded-full flex items-center justify-center p-4 w-fit">
            <FontAwesomeIcon
              className=" p-4 h-4 w-4 text-amber-500"
              icon={faLightbulb}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-amber-500 font-['Raleway'] text-sm font-bold">
              Quizz en ligne
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
