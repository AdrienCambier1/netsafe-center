import { WhiteCard } from "../Cards";
import { SecondTitle } from "../Titles";
import { HeavyPurpleButton, GrayButton } from "../Buttons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export default function QuestionCard({ question, answers, onClick }) {
  return (
    <WhiteCard>
      <div className="flex flex-col p-2 gap-8">
        <SecondTitle value={question} />
        <div className="grid grid-cols-2 gap-4">
          {answers.map((answer) => (
            <div className="flex gap-2 items-center">
              <GrayButton icon={faCircle} />
              {answer}
            </div>
          ))}
        </div>
        <HeavyPurpleButton
          value="Valider"
          icon={faArrowLeft}
          onClick={onClick}
        />
      </div>
    </WhiteCard>
  );
}
