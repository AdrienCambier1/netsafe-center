import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function KnowledgeCard({ brand, title }) {
  return (
    <div className="bg-white rounded-xl w-full border-2 border-gray-300/50 p-2 hover:border-teal-500 cursor-pointer flex gap-4 items-center">
      <div className="bg-teal-50 rounded-xl flex items-center justify-center p-4 w-fit">
        <FontAwesomeIcon
          className=" p-4 h-4 w-4 text-teal-500"
          icon={faBookOpen}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-teal-500 font-['Raleway'] text-sm font-bold">
          {brand}
        </p>
        <p className="text-sm font-['Raleway'] font-medium text-zinc-600">
          {title}
        </p>
      </div>
    </div>
  );
}
