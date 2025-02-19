import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function SaveButton({ link, onClick, connectionRequired }) {
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
      className="dark:bg-neutral-900 dark:hover:bg-indigo-950 bg-neutral-100 hover:bg-indigo-50 transition flex items-center justify-center dark:text-neutral-600 text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-500 rounded-full cursor-pointer"
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={faBookmark} />
    </Link>
  );
}
