import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function RoundedGrayButton({ link, onClick, icon, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${
        value ? "px-4 w-fit" : null
      } transition hover:opacity-75 dark:bg-neutral-900 bg-neutral-100 flex gap-2 justify-center items-center dark:text-neutral-600 text-neutral-400 rounded-full cursor-pointer`}
    >
      <FontAwesomeIcon
        className={`${value ? "py-2.5" : "p-2.5"} h-4 w-4`}
        icon={icon}
      />
      {value && (
        <p className="text-sm font-['Raleway'] font-medium text-neutral-400 dark:text-neutral-600">
          {value}
        </p>
      )}
    </Link>
  );
}
