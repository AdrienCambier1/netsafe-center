import { HeavyPurpleButton, RadioButton, RadioAnswerButton } from "../Buttons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

  const typeText = {
    single_choice: "Choisissez une réponse",
    multiple_choice: "Choisissez une ou plusieurs réponses",
  };

  return (
    <div className="card">
      <div className="flex flex-col p-2 gap-8">
        <h2>{question}</h2>
        <div className="flex flex-col gap-4">
          <h4>{typeText[type]}</h4>
          <div className="grid grid-cols-2 gap-4">
            {answers.map((answer, index) => {
              const result = results[index] || {};
              const isCorrect = result.isCorrect || false;
              const isSelected = result.isSelected || false;

              return (
                <div key={index} className="flex gap-2 items-center">
                  {showResults ? (
                    <RadioAnswerButton
                      isCorrect={isCorrect}
                      isSelected={isSelected}
                    />
                  ) : (
                    <RadioButton
                      onClick={() => toggleSelectedAnswer(answer)}
                      isChecked={selectedAnswers.includes(answer)}
                    />
                  )}
                  <p className="default-text">{answer}</p>
                </div>
              );
            })}
          </div>
        </div>
        {showResults ? (
          <div className="border-t border-color pt-2 w-full text-center">
            <p className="smaller-dark-text">{explanation}</p>
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
    </div>
  );
}
