import { useParams } from "react-router-dom";
import { QuestionCard } from "../../../Components/Cards";
import QuizData from "../../../Data/quiz.json";
import { useContext, useState, useEffect } from "react";
import { QuestionContext } from "../../../Contexts";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { LightPurpleButton } from "../../../Components/Buttons";

export default function Question() {
  const { whichQuestion, setWhichQuestion } = useContext(QuestionContext);
  const { quizId } = useParams();
  const quizIndex = parseInt(quizId) - 1;
  const [isEnded, setIsEnded] = useState(false);

  const quiz = QuizData.quizzes[quizIndex];

  const handleNextQuestion = () => {
    if (whichQuestion < quiz.questions.length) {
      setWhichQuestion(whichQuestion + 1);
    } else {
      setIsEnded(true);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [handleNextQuestion]);

  useEffect(() => {
    return () => {
      setWhichQuestion(1);
    };
  }, []);

  return (
    <>
      {quiz.questions.slice(0, whichQuestion).map((question, i) => (
        <QuestionCard
          key={i}
          question={question.question}
          answers={question.answers}
          correctAnswers={question.correct_answers}
          onClick={handleNextQuestion}
          type={question.type}
          explanation={question.explanation}
        />
      ))}
      {isEnded && (
        <LightPurpleButton
          value="Retour à la liste des quizz"
          icon={faCaretLeft}
          link="/quiz_list"
        />
      )}
    </>
  );
}
