import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export default function ToolsCard({ brand, title }) {
  return (
    <div className="bg-white rounded-xl w-full border border-gray-300/50 p-2 hover:border-purple-500 cursor-pointer flex gap-4 items-center">
      <div className="bg-purple-50 rounded-xl flex items-center justify-center p-4 w-fit">
        <FontAwesomeIcon
          className=" p-4 h-4 w-4 text-purple-500"
          icon={faScrewdriverWrench}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-purple-500 font-['Raleway'] text-sm font-bold">
          {brand}
        </p>
        <p className="text-sm font-['Raleway'] font-medium text-zinc-600">
          {title}
        </p>
      </div>
    </div>
  );
}
