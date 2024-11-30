import { FirstTitle, FourthTitle } from "../../Components/Titles";
import { QuizCard } from "../../Components/Cards";
import QuizData from "../../Data/quiz.json";

export default function QuizList() {
  return (
    <div className="p-8 w-full max-w-[70rem]">
      <div className="border-b dark:border-zinc-800 border-zinc-200 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Quizz d'apprentissage" />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <FourthTitle value="Retrouvez l'intégralité de nos quizz en ligne" />
        <div className="flex flex-col md:grid grid-cols-4 gap-4">
          {QuizData.quizzes.map((quiz) => {
            return (
              <QuizCard
                key={quiz.id}
                difficulty={quiz.difficulty}
                level={quiz.level}
                title={quiz.name}
                link={`/quiz/${quiz.id}`}
                button={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
