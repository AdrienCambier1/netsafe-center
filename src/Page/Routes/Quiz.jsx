import { FirstTitle } from "../../Components/Titles";
import { Outlet, useParams } from "react-router-dom";
import QuizData from "../../Data/quiz.json";
import { Navigate } from "react-router-dom";
import { QuizCard } from "../../Components/Cards";

export default function Quiz() {
  const { quizId, questionId } = useParams();
  const quizIndex = parseInt(quizId) - 1;

  const quiz = QuizData.quizzes[quizIndex];

  if (!quiz) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="p-8 w-full max-w-[70rem]">
      <div className="border-b border-gray-300/50 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Quiz en ligne" />
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
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
