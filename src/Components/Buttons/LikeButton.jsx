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
      className="group flex gap-1 items-center justify-center dark:text-neutral-600 text-neutral-400 rounded-xl cursor-pointer w-fit"
    >
      <FontAwesomeIcon
        className="h-4 w-4 rounded-full group-hover:text-red-500"
        icon={faThumbsUp}
      />
      <p className="default-text group-hover:text-red-500 ml-1">{value}</p>
    </Link>
  );
}
