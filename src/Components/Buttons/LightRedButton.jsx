import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { DefaultText } from "../Texts";

export default function LightRedButton({ link, onClick, icon, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="group p-2.5 flex gap-2 items-center dark:hover:bg-zinc-800 hover:bg-white w-full h-fit rounded-xl  dark:hover:shadow-none hover:shadow-md hover:shadow-gray-200/50 cursor-pointer"
    >
      <FontAwesomeIcon
        className="h-4 w-4 p-2.5 dark:bg-zinc-900 bg-red-100 rounded-xl dark:text-red-700 text-red-300 group-hover:text-red-500 flex items-center hover:text-zinc-600"
        icon={icon}
      />
      <DefaultText value={value} />
    </Link>
  );
}
