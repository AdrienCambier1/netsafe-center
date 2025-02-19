import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export default function LikeButton({
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
      className="group flex items-center justify-center dark:text-neutral-600 text-neutral-400 rounded-xl cursor-pointer w-fit"
    >
      <FontAwesomeIcon
        className="transition p-2.5 h-4 w-4 group-hover:bg-red-50 group-hover:dark:bg-red-950 rounded-full group-hover:text-red-500 "
        icon={faThumbsUp}
      />
      <p className="transition default-text group-hover:text-red-500 ml-1">
        {value}
      </p>
    </Link>
  );
}
