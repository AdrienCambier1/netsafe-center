import { FirstTitle, FourthTitle } from "../../Components/Titles";
import { ClassCard } from "../../Components/Cards";
import ClassData from "../../Data/class.json";

export default function ClassesList() {
  return (
    <div className="p-8 w-full max-w-[70rem]">
      <div className="border-b dark:border-neutral-800 border-neutral-200 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Cours" />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <FourthTitle value="Retrouvez l'intégralité de nos cours en libre accès" />
        <div className="flex flex-col md:grid grid-cols-4 gap-4">
          <ClassCard title={ClassData.course.title} link="/class/1/section/1" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
        </div>
      </div>
    </div>
  );
}
