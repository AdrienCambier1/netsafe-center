import { useParams } from "react-router-dom";
import { QuestionCard } from "../../../Components/Cards";
import QuizData from "../../../Data/quiz.json";
import { useContext } from "react";
import { QuestionContext } from "../../../Contexts/QuestionContext";

export default function Question() {
  const { whichQuestion, setWhichQuestion } = useContext(QuestionContext);
  const { quizId } = useParams();

  const quiz = QuizData.quizzes[quizId - 1];

  const handleNextQuestion = () => {
    if (whichQuestion < quiz.questions.length) {
      setWhichQuestion(whichQuestion + 1);
      console.log("Next Question:", whichQuestion + 1);
    } else {
      console.log("Fin du quiz");
    }
  };

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
    </>
  );
}
