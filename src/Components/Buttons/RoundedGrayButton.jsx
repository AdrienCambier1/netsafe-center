import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { DefaultText } from "../Texts";

export default function RoundedGrayButton({ link, onClick, icon, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${
        value ? "px-4" : null
      } dark:bg-neutral-900 bg-neutral-100 flex gap-2 items-center dark:text-neutral-700 text-neutral-300 dark:hover:text-neutral-400 hover:text-neutral-600 rounded-full cursor-pointer w-fit`}
    >
      <FontAwesomeIcon
        className={`${value ? "py-2.5" : "p-2.5"} h-4 w-4`}
        icon={icon}
      />
      {value && <DefaultText value={value} />}
    </Link>
  );
}
