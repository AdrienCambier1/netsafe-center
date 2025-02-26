import { QuizCard } from "../../Components/Cards";
import QuizData from "../../Data/quiz.json";

export default function QuizList() {
  return (
    <div className="page-content">
      <h1 className="first-title border-b border-color pb-4">
        Quiz d'apprentissage
      </h1>
      <div className="pt-4 flex flex-col gap-4">
        <h4 className="fourth-title">
          Retrouvez l'intégralité de nos quizz en ligne
        </h4>
        <div className="flex flex-col md:grid grid-cols-4 gap-4">
          {QuizData.quizzes.map((quiz) => {
            return (
              <QuizCard
                key={quiz.id}
                difficulty={quiz.difficulty}
                level={quiz.level}
                title={quiz.name}
                link={`/quiz/${quiz.id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
