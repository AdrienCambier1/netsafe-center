import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoundedGrayButton({ link, onClick, icon, value }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className="bg-zinc-100 py-2 px-4 flex gap-2 items-center text-zinc-300 hover:text-zinc-600 rounded-full transition-all ease-in-out w-fit"
    >
      <FontAwesomeIcon className="h-4 w-4" icon={icon}></FontAwesomeIcon>
      <p className="font-['Raleway'] font-medium text-sm text-zinc-600">
        {value}
      </p>
    </a>
  );
}
