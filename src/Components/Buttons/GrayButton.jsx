import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function GrayButton({ link, onClick, icon, background, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${background ? `bg-zinc-100` : null} ${
        value ? "p-2 w-full" : null
      } flex gap-2 items-center justify-center text-zinc-300 hover:text-zinc-600 rounded-xl cursor-pointer transition-all ease-in-out w-fit`}
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon}></FontAwesomeIcon>
      {value}
    </Link>
  );
}
