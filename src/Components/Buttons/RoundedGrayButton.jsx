import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function RoundedGrayButton({ link, onClick, icon, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${
        value ? "px-4" : null
      } bg-zinc-50 border border-zinc-100 flex gap-2 items-center text-zinc-300 hover:text-zinc-600 rounded-full cursor-pointer transition-all ease-in-out w-fit`}
    >
      <FontAwesomeIcon
        className={`${value ? "py-2.5" : "p-2.5"} h-4 w-4`}
        icon={icon}
      ></FontAwesomeIcon>
      {value ? (
        <p className="font-['Raleway'] font-medium text-sm text-zinc-600">
          {value}
        </p>
      ) : null}
    </Link>
  );
}
