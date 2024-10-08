import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeavyPurpleButton({ link, onClick, icon, value }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className={`${
        value ? `p-2` : null
      } flex gap-2 items-center text-white bg-purple-500 hover:bg-purple-600 hover:shadow-purple-600/50 shadow-md shadow-purple-500/50 rounded-xl transition-all ease-in-out`}
    >
      <FontAwesomeIcon
        className={`${value ? `bg-purple-400 rounded-xl` : null} p-2.5 h-4 w-4`}
        icon={icon}
      ></FontAwesomeIcon>
      {value ? (
        <p className="font-['Raleway'] font-medium text-sm ml-2">{value}</p>
      ) : null}
    </a>
  );
}
