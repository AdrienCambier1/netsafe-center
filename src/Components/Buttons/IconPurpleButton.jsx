import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function IconPurpleButton({ icon, onClick }) {
  return (
    <Link
      onClick={onClick}
      className="rounded-full bg-purple-500 hover:bg-purple-600 dark:bg-purple-700 dark:hover:bg-purple-800 shadow-md shadow-purple-500/50 hover:shadow-purple-600/50 dark:shadow-purple-700/50 dark:hover:shadow-purple-800/50 flex items-center justify-center text-white cursor-pointer ${custom}"
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon} />
    </Link>
  );
}
