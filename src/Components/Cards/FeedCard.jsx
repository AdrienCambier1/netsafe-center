import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCheck,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function Comment({ title, type }) {
  return (
    <li role="article" className="relative pl-8 ">
      <div className="flex flex-col flex-1 gap-4 justify-center">
        <div
          className={`absolute z-[1] inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ${
            type === "isActive"
              ? "feed-yellow"
              : type === "isCompleted"
              ? "feed-teal"
              : "feed-red"
          }`}
        >
          {type === "isActive" ? (
            <FontAwesomeIcon
              className="h-4 w-4 black-and-white"
              icon={faQuestion}
            />
          ) : type === "isCompleted" ? (
            <FontAwesomeIcon
              className="h-4 w-4 black-and-white"
              icon={faCheck}
            />
          ) : (
            <FontAwesomeIcon
              className="h-4 w-4 black-and-white"
              icon={faCaretRight}
            />
          )}
        </div>
        <p className="default-text">{title}</p>
      </div>
    </li>
  );
}
