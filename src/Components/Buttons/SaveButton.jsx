import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function SaveButton({ link, onClick, connectionRequired }) {
  const { isAuthenticated } = useContext(ConnectionContext);
  const { toggleModal } = useContext(ModalContext);

  const handleClick = (e) => {
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
      className="hover:opacity-75 dark:bg-indigo-900/50 bg-indigo-50 transition flex items-center justify-center text-indigo-500 dark:text-indigo-500 rounded-full cursor-pointer"
    >
      <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={faBookmark} />
    </Link>
  );
}
