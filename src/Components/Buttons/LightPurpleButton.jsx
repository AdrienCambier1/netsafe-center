import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function LightPurpleButton({
  link,
  onClick,
  icon,
  value,
  isOnRight,
}) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${
        isOnRight && "justify-end"
      } group p-2.5 flex gap-2 items-center dark:hover:bg-zinc-900 hover:bg-white w-full h-fit rounded-xl hover:shadow-md dark:hover:shadow-none hover:shadow-gray-200/50 cursor-pointer transition-all ease-in-out`}
    >
      {isOnRight ? (
        <>
          <p className="dark:text-zinc-400 text-zinc-600 font-medium font-['Raleway'] text-sm mr-2 overflow-hidden text-ellipsis">
            {value}
          </p>
          <FontAwesomeIcon
            className="h-4 w-4 p-2.5 dark:bg-purple-900 bg-purple-100 rounded-xl text-purple-300 group-hover:text-purple-500 flex items-center hover:text-zinc-600 transition-all ease-in-out"
            icon={icon}
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            className="h-4 w-4 p-2.5 dark:bg-purple-950 bg-purple-100 rounded-xl dark:text-purple-500 text-purple-300 group-hover:text-purple-500 flex items-center hover:text-zinc-600 transition-all ease-in-out"
            icon={icon}
          />
          <p className="dark:text-zinc-400 text-zinc-600 font-medium font-['Raleway'] text-sm ml-2 overflow-hidden text-ellipsis">
            {value}
          </p>
        </>
      )}
    </Link>
  );
}
