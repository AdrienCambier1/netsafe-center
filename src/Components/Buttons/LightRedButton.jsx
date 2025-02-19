import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function LightRedButton({ link, onClick, icon, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="transition group p-2.5 flex gap-4 items-center dark:hover:bg-neutral-800 hover:bg-white w-full h-fit rounded-xl dark:hover:shadow-none hover:shadow-md hover:shadow-gray-200/50 cursor-pointer"
    >
      <FontAwesomeIcon
        className="transition h-4 w-4 p-2.5 dark:bg-neutral-900 bg-red-100 rounded-xl dark:text-red-700 text-red-300 group-hover:text-red-500 flex items-center hover:text-neutral-600"
        icon={icon}
      />
      <p className="default-text">{value}</p>
    </Link>
  );
}
