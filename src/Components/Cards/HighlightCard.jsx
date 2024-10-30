export default function HighlightCard({ data, type }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl p-4 border ${
        type === "tips"
          ? "bg-teal-50 border-teal-100"
          : type === "objectives"
          ? "bg-amber-50 border-amber-100"
          : "bg-zinc-50 border-zinc-100"
      }`}
    >
      <p className="text-md font-['Raleway'] font-semibold text-zinc-800">
        {type === "tips"
          ? "Conseils"
          : type === "objectives"
          ? "Objectifs"
          : "Undefined"}
      </p>
      <p className="text-sm font-['Raleway'] font-medium text-zinc-600 list-disc list-inside">
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
            className="text-sm font-['Raleway'] font-medium text-zinc-600 list-disc list-inside"
          >
            {tips}
          </li>
        ))}
      </ul>
    </div>
  );
}
