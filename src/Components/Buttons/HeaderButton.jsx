import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function HeaderButton({ link, onClick, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="header-button min-h-10 px-1 font-medium font-['Raleway'] text-sm flex items-center justify-center h-full w-fit relative cursor-pointer dark:text-neutral-400 text-neutral-600 hover:text-neutral-800 transition-all ease-in-out"
    >
      {value}
    </Link>
  );
}
