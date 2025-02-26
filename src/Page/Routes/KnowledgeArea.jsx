import { KnowledgeCard } from "../../Components/Cards";

export default function KnowledgeArea() {
  return (
    <div className="page-content">
      <h1 className="first-title border-b border-color pb-4">
        Espace de connaissances
      </h1>
      <div className="pt-4 flex flex-col gap-4">
        <h4 className="fourth-title">
          Retrouvez une liste de liens permettant de suivre l'actualité
          concernant la sécurité numérique
        </h4>
        <div className="flex flex-col md:grid grid-cols-3 gap-4">
          <KnowledgeCard brand="Microsoft" title="Outil 1" />
          <KnowledgeCard brand="Microsoft" title="Outil 1" />
          <KnowledgeCard brand="Microsoft" title="Outil 1" />
          <KnowledgeCard brand="Microsoft" title="Outil 1" />
        </div>
      </div>
    </div>
  );
}
