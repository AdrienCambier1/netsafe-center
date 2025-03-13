import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";

export default function IconPurpleButton({
  icon,
  onClick,
  link,
  disabled,
  connectionRequired,
}) {
  const { isAuthenticated } = useContext(ConnectionContext);
  const { toggleModal } = useContext(ModalContext);

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (connectionRequired) {
      if (!isAuthenticated) {
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
      to={connectionRequired && !isAuthenticated ? "#" : link}
      onClick={handleClick}
      className={`${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-75"
      } transition rounded-full bg-purple-shadow flex items-center justify-center text-white cursor-pointer`}
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon} />
    </Link>
  );
}
