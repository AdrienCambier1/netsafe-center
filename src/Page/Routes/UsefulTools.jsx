import { FirstTitle, FourthTitle } from "../../Components/Titles";
import { ToolsCard } from "../../Components/Cards";

export default function UsefulTools() {
  return (
    <div className="p-8 w-full max-w-[70rem]">
      <div className="border-b border-gray-300/50 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Outils pratiques" />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <FourthTitle value="Retrouvez une liste d'outils gratuits pour vous protéger numériquement" />
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
