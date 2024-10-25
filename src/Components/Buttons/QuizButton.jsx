import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function QuizButton({ onClick, isChecked }) {
  return (
    <Link
      onClick={onClick}
      className=" text-zinc-300 hover:text-zinc-600 flex gap-2 items-center justify-center rounded-xl cursor-pointer transition-all ease-in-out w-fit"
    >
      <FontAwesomeIcon
        className="p-2.5 h-4 w-4"
        icon={isChecked ? faCheck : faCircle}
      ></FontAwesomeIcon>
    </Link>
  );
}
