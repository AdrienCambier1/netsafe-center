import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button2({ link, onClick, icon, value }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className="p-2.5 flex gap-2 items-center hover:bg-white w-full h-fit rounded-xl hover:shadow-md shadow-purple-20/50"
    >
      <FontAwesomeIcon
        className="h-4 w-4 p-2.5 bg-purple-100 rounded-xl text-purple-300 flex items-center hover:text-zinc-600 transition-all ease-in-out"
        icon={icon}
      ></FontAwesomeIcon>
      <p className="text-zinc-600 font-medium font-['Raleway'] text-sm">
        {value}
      </p>
    </a>
  );
}
