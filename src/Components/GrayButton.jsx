import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GrayButton({ link, onClick, icon, background }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className={`${
        background ? `bg-zinc-100` : null
      } flex gap-2 items-center text-zinc-300 hover:text-zinc-600 rounded-xl transition-all ease-in-out w-fit`}
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon}></FontAwesomeIcon>
    </a>
  );
}
