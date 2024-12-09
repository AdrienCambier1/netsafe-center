import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";

export default function HeaderButton({
  link,
  onClick,
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
      className="header-button min-h-10 px-1 font-medium font-['Raleway'] text-sm flex items-center justify-center h-full w-fit relative cursor-pointer dark:text-neutral-400 text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all ease-in-out"
    >
      {value}
    </Link>
  );
}
