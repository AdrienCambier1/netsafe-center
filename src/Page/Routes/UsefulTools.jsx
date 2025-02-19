import { ToolsCard } from "../../Components/Cards";

export default function UsefulTools() {
  return (
    <div className="p-8 w-full max-w-[70rem]">
      <div className="border-b dark:border-neutral-800 border-neutral-200 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <h1 className="first-title">Outils pratiques</h1>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <h4 className="fourth-title">
          Retrouvez une liste d'outils gratuits pour vous protéger numériquement
        </h4>
        <div className="flex flex-col md:grid grid-cols-3 gap-4">
          <ToolsCard brand="Microsoft" title="Outil 1" />
          <ToolsCard brand="Microsoft" title="Outil 1" />
          <ToolsCard brand="Microsoft" title="Outil 1" />
          <ToolsCard brand="Microsoft" title="Outil 1" />
        </div>
      </div>
    </div>
  );
}
