import { FirstTitle, FourthTitle } from "../../Components/Titles";
import { KnowledgeCard } from "../../Components/Cards";

export default function KnowledgeArea() {
  return (
    <div className="p-8 w-full max-w-[70rem]">
      <div className="border-b dark:border-zinc-800 border-gray-300/50 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Espace de connaissances" />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <FourthTitle value="Retrouvez une liste de liens permettant de suivre l'actualité concernant la sécurité numérique" />
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
