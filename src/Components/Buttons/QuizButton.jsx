import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function QuizButton({ onClick, isChecked }) {
  return (
    <Link
      onClick={onClick}
      className="dark:text-neutral-700 text-neutral-300 dark:hover:text-neutral-400 hover:text-neutral-600 flex gap-2 items-center justify-center rounded-xl cursor-pointer w-fit"
    >
      <FontAwesomeIcon
        className="p-2.5 h-4 w-4"
        icon={isChecked ? faCheck : faCircle}
      />
    </Link>
  );
}
