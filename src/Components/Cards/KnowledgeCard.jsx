import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { DefaultText, ColoredText } from "../Texts";

export default function KnowledgeCard({ brand, title }) {
  return (
    <div className="dark:bg-neutral-950 bg-white rounded-xl w-full border dark:border-neutral-800 border-neutral-200 p-2 dark:hover:border-teal-500 hover:border-teal-500 cursor-pointer flex gap-4 items-center">
      <div className="dark:bg-teal-950 bg-teal-50 rounded-xl flex items-center justify-center p-4 w-fit">
        <FontAwesomeIcon
          className="p-4 h-4 w-4 text-teal-500"
          icon={faBookOpen}
        />
      </div>
      <div className="flex flex-col gap-2">
        <ColoredText value={brand} color="teal-500" />
        <DefaultText value={title} />
      </div>
    </div>
  );
}
