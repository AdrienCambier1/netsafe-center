import { useParams, useNavigate } from "react-router-dom";
import { QuestionCard } from "../../../Components/Cards";
import QuizData from "../../../Data/quiz.json";
import { Navigate } from "react-router-dom";

export default function Question() {
  const { quizId, questionId } = useParams();
  const navigate = useNavigate();
  const quizIndex = parseInt(quizId) - 1;
  const questionIndex = parseInt(questionId) - 1;

  const quiz = QuizData.quizzes[quizIndex];
  const question = quiz.questions[questionIndex];

  if (!quiz || !question) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      {quiz.questions.slice(0, questionIndex + 1).map((question, i) => (
        <QuestionCard
          key={i}
          question={question.question}
          answers={question.answers}
          onClick={() => navigate(`/quiz/${quizId}/question/${i + 2}`)}
        />
      ))}
    </>
  );
}
