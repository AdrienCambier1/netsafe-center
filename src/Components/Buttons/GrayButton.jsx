import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function GrayButton({ link, onClick, icon, background, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${background ? `dark:bg-zinc-900 bg-zinc-100` : null} ${
        value ? "p-2 w-full" : null
      } flex gap-2 items-center justify-center dark:text-zinc-700 text-zinc-300 dark:hover:text-zinc-400 hover:text-zinc-600 rounded-xl cursor-pointer transition-all ease-in-out w-fit`}
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon} />
      {value}
    </Link>
  );
}
