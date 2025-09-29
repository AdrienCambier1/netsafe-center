import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function RoundedGrayButton({ link, onClick, icon, value }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      tyoe="button"
      className={`${
        value && "px-4 w-fit"
      } hover:opacity-75 gray-btn gray-btn-bg !rounded-full`}
    >
      <FontAwesomeIcon
        className={`${value ? "py-2.5" : "p-2.5"} h-4 w-4`}
        icon={icon}
      />
      {value && <p className="text-sm">{value}</p>}
    </Link>
  );
}
