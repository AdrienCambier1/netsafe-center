import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { DefaultText } from "../Texts";

export default function GrayButton({
  link,
  onClick,
  icon,
  background,
  value,
  custom,
}) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${background ? `dark:bg-neutral-900 bg-neutral-100` : null} ${
        value ? "p-2 w-full h-10" : null
      } flex gap-2 items-center justify-center dark:text-neutral-700 text-neutral-300 dark:hover:text-neutral-400 hover:text-neutral-600 rounded-xl cursor-pointer w-fit ${custom}`}
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon} />
      {value}
    </Link>
  );
}
