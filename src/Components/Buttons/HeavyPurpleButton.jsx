import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function HeavyPurpleButton({ link, onClick, icon, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${value ? "p-2 w-full" : "w-fit"} flex gap-2 items-center ${
        icon ? null : " justify-center"
      } text-white dark:text-black bg-purple-500 dark:hover:bg-purple-400 hover:bg-purple-600 hover:shadow-purple-600/50 shadow-md shadow-purple-500/50 rounded-xl cursor-pointer`}
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
