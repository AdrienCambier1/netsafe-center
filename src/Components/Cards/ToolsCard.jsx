import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export default function ToolsCard({ brand, title, link }) {
  return (
    <a href={link} target="_blank" className="alt-card hover:border-purple-500">
      <div className="bg-purple bg-icon-squared">
        <FontAwesomeIcon className="p-4 h-4 w-4" icon={faScrewdriverWrench} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-purple-500">{brand}</p>
        <p className="default-text">{title}</p>
      </div>
    </a>
  );
}
