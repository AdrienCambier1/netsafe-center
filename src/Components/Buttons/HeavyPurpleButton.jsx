import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";

export default function HeavyPurpleButton({
  link,
  onClick,
  icon,
  value,
  connectionRequired,
}) {
  const { connection } = useContext(ConnectionContext);
  const { toggleModal } = useContext(ModalContext);

  const handleClick = (e) => {
    if (connectionRequired) {
      if (!connection) {
        toggleModal("connectionRequirementDialog");
      } else if (onClick) {
        onClick(e);
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      to={connectionRequired && !connection ? "#" : link}
      onClick={handleClick}
      className={` ${!icon && "justify-center"} heavy-purple-btn`}
      type="button"
    >
      <FontAwesomeIcon
        className="dark:bg-purple-600 bg-purple-400 rounded-xl
         p-2.5 h-4 w-4"
        icon={icon}
      />
      {value && <p className={` ${icon && "ml-2"}`}>{value}</p>}
    </Link>
  );
}
