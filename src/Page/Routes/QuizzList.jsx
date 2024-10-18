import { FirstTitle, FourthTitle } from "../../Components/Titles";
import { QuizzCard } from "../../Components/Cards";

export default function QuizzList() {
  return (
    <div className="relative p-8 max-w-[70rem] left-1/2 -translate-x-1/2">
      <div className="border-b border-gray-300/50 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Quizz d'apprentissage" />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <FourthTitle value="Retrouvez l'intégralité de nos quizz en ligne" />
        <div className="flex flex-col md:grid grid-cols-4 gap-4">
          <QuizzCard title="Tester le quizz" />
          <QuizzCard title="Tester le quizz" />
          <QuizzCard title="Tester le quizz" />
          <QuizzCard title="Tester le quizz" />
          <QuizzCard title="Tester le quizz" />
          <QuizzCard title="Tester le quizz" />
          <QuizzCard title="Tester le quizz" />
          <QuizzCard title="Tester le quizz" />
        </div>
      </div>
    </div>
  );
}
