import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { DefaultText } from "../Titles";

export default function ToolsCard({ brand, title }) {
  return (
    <div className="dark:bg-zinc-950 bg-white rounded-xl w-full border dark:border-zinc-800 border-gray-300/50 p-2 dark:hover:border-purple-500 hover:border-purple-500 cursor-pointer flex gap-4 items-center">
      <div className="dark:bg-purple-950 bg-purple-50 rounded-xl flex items-center justify-center p-4 w-fit">
        <FontAwesomeIcon
          className=" p-4 h-4 w-4 text-purple-500"
          icon={faScrewdriverWrench}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-purple-500 font-['Raleway'] text-sm font-bold">
          {brand}
        </p>
        <DefaultText value={title} />
      </div>
    </div>
  );
}
