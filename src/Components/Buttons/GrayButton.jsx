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
      className={`${
        background
          ? `dark:bg-neutral-900 bg-neutral-100 hover:opacity-75`
          : "hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:opacity-75"
      } ${
        value ? "p-2 w-full h-10" : null
      } flex gap-2 items-center justify-center dark:text-neutral-600 text-neutral-400 rounded-xl cursor-pointer w-fit ${custom}`}
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon} />
      {value}
    </Link>
  );
}
