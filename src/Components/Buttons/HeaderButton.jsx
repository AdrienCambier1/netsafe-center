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
      className="transition header-button"
    >
      {value}
    </Link>
  );
}
