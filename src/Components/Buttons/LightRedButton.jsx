import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function LightRedButton({ link, onClick, icon, value }) {
  return (
    <Link to={link} onClick={onClick} className="transition light-btn group">
      <FontAwesomeIcon className="transition red-icon" icon={icon} />
      <p className="default-text">{value}</p>
    </Link>
  );
}
