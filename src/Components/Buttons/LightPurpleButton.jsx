import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LightPurpleButton({ link, onClick, icon, value }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className="group p-2.5 flex gap-2 items-center hover:bg-white w-full h-fit rounded-xl hover:shadow-md hover:shadow-purple-200/50 cursor-pointer transition-all ease-in-out"
    >
      <FontAwesomeIcon
        className="h-4 w-4 p-2.5 bg-purple-100 rounded-xl text-purple-300 group-hover:text-purple-500 flex items-center hover:text-zinc-600 transition-all ease-in-out"
        icon={icon}
      ></FontAwesomeIcon>
      <p className="text-zinc-600 font-medium font-['Raleway'] text-sm ml-2">
        {value}
      </p>
    </a>
  );
}
