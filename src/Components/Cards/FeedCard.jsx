import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountImage from "../AccountImage";
import {
  faCaretRight,
  faCheck,
  faCircle,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function Comment({ title, description, content, type }) {
  return (
    <li role="article" className="relative pl-8 ">
      <div className="flex flex-col flex-1 gap-4">
        <div
          className={`absolute z-[1] inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ${
            type === "isActive"
              ? "bg-yellow-500 shadow-md shadow-yellow-500/50"
              : type === "isCompleted"
              ? "bg-teal-500 shadow-md shadow-teal-500/50"
              : "dark:bg-zinc-700 bg-zinc-300"
          }`}
        >
          {type === "isActive" ? (
            <FontAwesomeIcon className="h-4 w-4 text-white" icon={faQuestion} />
          ) : type === "isCompleted" ? (
            <FontAwesomeIcon className="h-4 w-4 text-white" icon={faCheck} />
          ) : (
            <FontAwesomeIcon
              className="h-4 w-4 text-white"
              icon={faCaretRight}
            />
          )}
        </div>
        <h4 className="flex flex-col md:gap-2 items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
          <span className="dark:text-zinc-400 text-zinc-600 font-['Raleway'] font-medium text-sm">
            {title}
          </span>
          <span className="dark:text-zinc-600 text-zinc-400 font-['Raleway'] font-medium text-xs">
            {description}
          </span>
        </h4>
        <p className="font-medium font-['Raleway'] text-sm text-zinc-600">
          {content}
        </p>
      </div>
    </li>
  );
}
