import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export default function ToolsCard({ brand, title }) {
  return (
    <div className="alt-card dark:hover:border-purple-500 hover:border-purple-500">
      <div className="dark:bg-purple-950 bg-purple-50 rounded-xl flex items-center justify-center p-4 w-fit">
        <FontAwesomeIcon
          className=" p-4 h-4 w-4 text-purple-500"
          icon={faScrewdriverWrench}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-['Raleway'] text-sm font-bold text-purple-500">
          {brand}
        </p>
        <p className="default-text">{title}</p>
      </div>
    </div>
  );
}
