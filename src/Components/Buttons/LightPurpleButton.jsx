import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { DefaultText } from "../Texts";

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
      } group p-2.5 flex gap-4 items-center dark:hover:bg-neutral-800 hover:bg-white w-full h-fit rounded-xl hover:shadow-md dark:hover:shadow-none hover:shadow-gray-200/50 cursor-pointer`}
    >
      {isOnRight ? (
        <>
          <DefaultText value={value} custom="text-end" />

          <FontAwesomeIcon
            className="h-4 w-4 p-2.5 dark:bg-neutral-900 bg-purple-100 rounded-xl dark:text-purple-700 text-purple-300 group-hover:text-purple-500 flex items-center hover:text-neutral-600"
            icon={icon}
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            className="h-4 w-4 p-2.5 dark:bg-neutral-900 bg-purple-100 rounded-xl dark:text-purple-700 text-purple-300 group-hover:text-purple-500 flex items-center hover:text-neutral-600"
            icon={icon}
          />
          <DefaultText value={value} custom="text-start" />
        </>
      )}
    </Link>
  );
}
