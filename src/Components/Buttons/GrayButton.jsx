import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";

export default function GrayButton({
  link,
  onClick,
  icon,
  background,
  value,
  custom,
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
      type="button"
      className={`${
        background
          ? "gray-btn-bg"
          : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
      } ${
        value && "p-2 w-full h-10"
      } hover:opacity-75 transition gray-btn rounded-xl w-fit ${custom}`}
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon} />
      {value}
    </Link>
  );
}
