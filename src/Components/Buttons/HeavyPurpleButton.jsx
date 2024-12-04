import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function HeavyPurpleButton({ link, onClick, icon, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${
        value ? "p-2 w-full" : "w-fit rounded-full"
      } flex gap-2 items-center ${
        icon ? null : "justify-center h-10"
      } text-white dark:bg-purple-700 bg-purple-500 dark:hover:bg-purple-800 hover:bg-purple-600 dark:hover:shadow-purple-800/50 hover:shadow-purple-600/50 shadow-md dark:shadow-purple-700/50 shadow-purple-500/50 rounded-xl cursor-pointer`}
    >
      <FontAwesomeIcon
        className={`${
          value ? `dark:bg-purple-600 bg-purple-400 rounded-xl` : null
        } p-2.5 h-4 w-4`}
        icon={icon}
      />
      {value ? (
        <p
          className={`font-['Raleway'] font-medium text-sm overflow-hidden text-ellipsis ${
            icon ? "ml-2" : null
          }`}
        >
          {value}
        </p>
      ) : null}
    </Link>
  );
}
