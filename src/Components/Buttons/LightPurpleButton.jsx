import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";

export default function LightPurpleButton({
  link,
  onClick,
  icon,
  value,
  isOnRight,
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
      className={`${isOnRight && "justify-end"} transition light-btn group`}
    >
      {isOnRight ? (
        <>
          <p className="default-text text-end">{value}</p>
          <FontAwesomeIcon className="transition icon" icon={icon} />
        </>
      ) : (
        <>
          <FontAwesomeIcon className="transition icon" icon={icon} />
          <p className="default-text text-start">{value}</p>
        </>
      )}
    </Link>
  );
}
