import {
  faCheck,
  faLightbulb,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { IconWithBackground } from "../";

export default function HighlightCard({ data, type }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl p-4 ${
        type === "tips" ? "bg-teal border-teal" : "bg-yellow border-yellow"
      }`}
    >
      {type === "tips" ? (
        <div className="flex gap-2 items-center">
          <IconWithBackground
            icon={faLightbulb}
            customBackground="bg-teal-400 dark:bg-teal-600"
            customColor="text-teal-50 dark:text-teal-950"
          />
          <p className="highlight-card-title">Conseils</p>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <IconWithBackground
            icon={faCheck}
            customBackground="bg-yellow-400 dark:bg-yellow-600"
            customColor="text-yellow-50 dark:text-yellow-950"
          />
          <p className="highlight-card-title">Objectifs</p>
        </div>
      )}
      <p className="highlight-card-text">
        {type === "tips"
          ? "Voici quelques conseils pour bien comprendre cette leçon :"
          : type === "objectives"
          ? "Avec cette leçon, vous serez capable de :"
          : "Undefined"}
      </p>
      <ul className="pl-8">
        {data.map((tips, index) => (
          <li key={index} className="highlight-card-text list-disc list-inside">
            {tips}
          </li>
        ))}
      </ul>
    </div>
  );
}
