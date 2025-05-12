import { ClassCard } from "../../Components/Cards";
import ClassData from "../../Data/class.json";

export default function ClassesList() {
  return (
    <div className="page-content">
      <h1>Cours</h1>
      <div className="pt-4 flex flex-col gap-4">
        <h4 className="fourth-title">
          Retrouvez l'intégralité de nos cours en libre accès
        </h4>
        <div className="flex flex-col md:grid grid-cols-4 gap-4">
          <ClassCard title={ClassData.course.title} link="/class/1/section/1" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
        </div>
      </div>
    </div>
  );
}
