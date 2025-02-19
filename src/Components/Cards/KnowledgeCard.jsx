import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function KnowledgeCard({ brand, title }) {
  return (
    <div className="alt-card dark:hover:border-teal-500 hover:border-teal-500">
      <div className="dark:bg-teal-950 bg-teal-50 rounded-xl flex items-center justify-center p-4 w-fit">
        <FontAwesomeIcon
          className="p-4 h-4 w-4 text-teal-500"
          icon={faBookOpen}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-['Raleway'] text-sm font-bold text-teal-500">
          {brand}
        </p>
        <p className="default-text">{title}</p>
      </div>
    </div>
  );
}
