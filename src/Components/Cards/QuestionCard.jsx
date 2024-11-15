import { WhiteCard } from "../Cards";
import { SecondTitle, FourthTitle, DefaultText, DarkText } from "../Titles";
import { HeavyPurpleButton, QuizButton } from "../Buttons";
import {
  faArrowLeft,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuestionCard({
  question,
  answers,
  correctAnswers,
  onClick,
  type,
  explanation,
}) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);

  const toggleSelectedAnswer = (answer) => {
    setSelectedAnswers((prev) => {
      if (prev.includes(answer)) {
        return prev.filter((item) => item !== answer);
      } else {
        return [...prev, answer];
      }
    });
  };

  const validateAnswers = () => {
    setResults(
      answers.map((answer) => ({
        answer,
        isSelected: selectedAnswers.includes(answer),
        isCorrect: correctAnswers.includes(answer),
      }))
    );
    setShowResults(true);
  };

  const getAnswerClass = (isCorrect, isSelected) => {
    if (isSelected) {
      return isCorrect ? "text-teal-500" : "text-red-500";
    } else {
      return "dark:text-zinc-700 text-zinc-300";
    }
  };

  const typeText = {
    single_choice: "Choisissez une réponse",
    multiple_choice: "Choisissez une ou plusieurs réponses",
  };

  return (
    <WhiteCard>
      <div className="flex flex-col p-2 gap-8">
        <SecondTitle value={question} />
        <div className="flex flex-col gap-4">
          <FourthTitle value={typeText[type]} />
          <div className="grid grid-cols-2 gap-4">
            {answers.map((answer, index) => {
              const result = results[index] || {};
              const isCorrect = result.isCorrect || false;
              const isSelected = result.isSelected || false;

              return (
                <div key={index} className="flex gap-2 items-center">
                  {showResults ? (
                    isSelected ? (
                      <FontAwesomeIcon
                        className={`p-2.5 h-4 w-4 ${getAnswerClass(
                          isCorrect,
                          isSelected
                        )}`}
                        icon={isCorrect ? faCheck : faXmark}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className={`p-2.5 h-4 w-4 ${getAnswerClass(
                          isCorrect,
                          isSelected
                        )}`}
                        icon={isCorrect ? faCheck : faXmark}
                      />
                    )
                  ) : (
                    <QuizButton
                      onClick={() => toggleSelectedAnswer(answer)}
                      isChecked={selectedAnswers.includes(answer)}
                    />
                  )}
                  <DefaultText value={answer} />
                </div>
              );
            })}
          </div>
        </div>
        {showResults ? (
          <div className="border-t dark:border-zinc-800 border-gray-300/50 pt-2 w-full text-center">
            <DarkText value={explanation} />
          </div>
        ) : (
          <HeavyPurpleButton
            value="Valider"
            icon={faArrowLeft}
            onClick={() => {
              validateAnswers();
              onClick();
            }}
          />
        )}
      </div>
    </WhiteCard>
  );
}
