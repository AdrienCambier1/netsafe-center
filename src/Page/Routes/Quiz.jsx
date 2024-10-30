import { FirstTitle } from "../../Components/Titles";
import { Outlet, useParams, Navigate } from "react-router-dom";
import QuizData from "../../Data/quiz.json";
import { FeedCard, QuizCard } from "../../Components/Cards";
import { LightBlueButton } from "../../Components/Buttons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { QuestionContext } from "../../Contexts/QuestionContext";
import { useContext } from "react";

export default function Quiz() {
  const { whichQuestion, setWhichQuestion } = useContext(QuestionContext);
  const { quizId } = useParams();
  const quizIndex = parseInt(quizId) - 1;

  const quiz = QuizData.quizzes[quizIndex];

  if (!quiz) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="p-8 w-full max-w-[70rem]">
      <div className="border-b border-gray-300/50 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Quizz en ligne" />
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-4">
        <div>
          <div className="flex flex-col gap-2 sticky top-24">
            <QuizCard
              key={quiz.id}
              difficulty={quiz.difficulty}
              level={quiz.level}
              title={quiz.name}
              status="Complété"
            />
            <ul
              aria-label="User feed"
              role="feed"
              className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200"
            >
              {quiz.questions.slice(0, whichQuestion - 1).map((question, i) => (
                <FeedCard
                  key={i}
                  user={question.question}
                  date={question.type}
                  type="isCompleted"
                />
              ))}
              {quiz.questions[whichQuestion - 1] && (
                <FeedCard
                  user={quiz.questions[whichQuestion - 1].question}
                  date={quiz.questions[whichQuestion - 1].type}
                  type="isActive"
                />
              )}
            </ul>
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
