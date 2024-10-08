import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button3({ link, onClick, value }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className="px-1 font-medium font-['Raleway'] text-sm flex items-center justify-center button3 h-full w-fit relative text-zinc-600 hover:text-zinc-800 transition-all ease-in-out"
    >
      {value}
    </a>
  );
}
