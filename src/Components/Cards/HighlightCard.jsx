import { DefaultText } from "../Titles";

export default function HighlightCard({ data, type }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl p-4 border ${
        type === "tips"
          ? "dark:bg-teal-950 bg-teal-50 dark:border-teal-900 border-teal-100"
          : type === "objectives"
          ? "dark:bg-yellow-950 bg-yellow-50 dark:border-yellow-900 border-yellow-100"
          : "dark:bg-zinc-950 bg-zinc-50 dark:border-zinc-900 border-zinc-100"
      }`}
    >
      <p className="text-md font-['Raleway'] font-semibold dark:text-zinc-200 text-zinc-800">
        {type === "tips"
          ? "Conseils"
          : type === "objectives"
          ? "Objectifs"
          : "Undefined"}
      </p>
      <DefaultText
        value={
          type === "tips"
            ? "Voici quelques conseils pour bien comprendre cette leçon :"
            : type === "objectives"
            ? "Avec cette leçon, vous serez capable de :"
            : "Undefined"
        }
      />
      <ul className="pl-8">
        {data.map((tips, index) => (
          <li
            key={index}
            className="text-sm font-['Raleway'] font-medium dark:text-zinc-400 text-zinc-600 list-disc list-inside"
          >
            {tips}
          </li>
        ))}
      </ul>
    </div>
  );
}
