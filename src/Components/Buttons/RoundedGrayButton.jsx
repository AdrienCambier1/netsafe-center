import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { DefaultText } from "../Titles";

export default function RoundedGrayButton({ link, onClick, icon, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${
        value ? "px-4" : null
      } dark:bg-zinc-900 bg-zinc-50 border dark:border-transparent border-zinc-100 flex gap-2 items-center dark:text-zinc-700 text-zinc-300 dark:hover:text-zinc-400 hover:text-zinc-600 rounded-full cursor-pointer transition-all ease-in-out w-fit`}
    >
      <FontAwesomeIcon
        className={`${value ? "py-2.5" : "p-2.5"} h-4 w-4`}
        icon={icon}
      />
      {value ? <DefaultText value={value} /> : null}
    </Link>
  );
}
