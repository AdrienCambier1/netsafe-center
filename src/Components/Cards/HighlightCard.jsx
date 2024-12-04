import {
  faCheck,
  faLightbulb,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { IconWithBackground } from "../";

export default function HighlightCard({ data, type }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl p-4 border ${
        type === "tips"
          ? "dark:bg-teal-950 bg-teal-50 dark:border-teal-900 border-teal-100"
          : "dark:bg-yellow-950 bg-yellow-50 dark:border-yellow-900 border-yellow-100"
      }`}
    >
      {type === "tips" ? (
        <div className="flex gap-2 items-center">
          <IconWithBackground
            icon={faLightbulb}
            customBackground="bg-teal-400 dark:bg-teal-600"
            customColor="text-teal-50 dark:text-teal-950"
          />
          <p className="text-md font-['Raleway'] font-semibold dark:text-neutral-200 text-neutral-800">
            Conseils
          </p>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <IconWithBackground
            icon={faCheck}
            customBackground="bg-yellow-400 dark:bg-yellow-600"
            customColor="text-yellow-50 dark:text-yellow-950"
          />
          <p className="text-md font-['Raleway'] font-semibold dark:text-neutral-200 text-neutral-800">
            Objectifs
          </p>
        </div>
      )}
      <p className="text-sm font-['Raleway'] font-medium dark:text-neutral-200 text-neutral-800">
        {type === "tips"
          ? "Voici quelques conseils pour bien comprendre cette leçon :"
          : type === "objectives"
          ? "Avec cette leçon, vous serez capable de :"
          : "Undefined"}
      </p>
      <ul className="pl-8">
        {data.map((tips, index) => (
          <li
            key={index}
            className="text-sm font-['Raleway'] font-medium dark:text-neutral-200 text-neutral-800 list-disc list-inside"
          >
            {tips}
          </li>
        ))}
      </ul>
    </div>
  );
}
