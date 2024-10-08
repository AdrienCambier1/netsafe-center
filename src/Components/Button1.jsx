import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button1({ link, onClick, icon, background }) {
  return (
    <a href={link} onClick={onClick} className="flex gap-2 items-center">
      {background ? (
        <FontAwesomeIcon
          className="p-2.5 bg-zinc-100 text-zinc-300 rounded-xl flex items-center h-4 w-4 hover:text-zinc-600 transition-all ease-in-out"
          icon={icon}
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          className="p-2.5 text-zinc-300 rounded-xl flex items-center h-4 w-4 hover:text-zinc-600 transition-all ease-in-out"
          icon={icon}
        ></FontAwesomeIcon>
      )}
    </a>
  );
}
