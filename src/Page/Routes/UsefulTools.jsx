import { ToolsCard } from "../../Components/Cards";

export default function UsefulTools() {
  return (
    <div className="page-content">
      <h1 className="first-title border-b border-color pb-4">
        Outils pratiques
      </h1>
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
