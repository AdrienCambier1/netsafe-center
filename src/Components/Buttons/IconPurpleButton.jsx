import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function IconPurpleButton({ icon, onClick, link, disabled }) {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      to={link}
      onClick={handleClick}
      className={`${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-purple-600 dark:hover:bg-purple-800 hover:shadow-purple-600/50 dark:hover:shadow-purple-800/50"
      } rounded-full bg-purple-500  dark:bg-purple-700  shadow-md shadow-purple-500/50  dark:shadow-purple-700/50  flex items-center justify-center text-white cursor-pointer`}
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon} />
    </Link>
  );
}
