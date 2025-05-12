import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function KnowledgeCard({ brand, title, link }) {
  return (
    <a href={link} target="_blank" className="alt-card hover:border-teal-500">
      <div className="bg-teal bg-icon-squared">
        <FontAwesomeIcon className="p-4 h-4 w-4" icon={faBookOpen} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-teal-500">{brand}</p>
        <p className="default-text">{title}</p>
      </div>
    </a>
  );
}
