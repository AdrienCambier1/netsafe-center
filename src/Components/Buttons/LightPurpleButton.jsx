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
      className={`${
        isOnRight && "justify-end"
      } transition group p-2.5 flex gap-4 items-center dark:hover:bg-neutral-800 hover:bg-white w-full h-fit rounded-xl hover:shadow-md dark:hover:shadow-none hover:shadow-gray-200/50 cursor-pointer`}
    >
      {isOnRight ? (
        <>
          <p className="default-text text-end">{value}</p>
          <FontAwesomeIcon
            className="transition h-4 w-4 p-2.5 dark:bg-neutral-900 bg-purple-100 rounded-xl dark:text-purple-700 text-purple-300 group-hover:text-purple-500 flex items-center hover:text-neutral-600"
            icon={icon}
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            className="transition h-4 w-4 p-2.5 dark:bg-neutral-900 bg-purple-100 rounded-xl dark:text-purple-700 text-purple-300 group-hover:text-purple-500 flex items-center hover:text-neutral-600"
            icon={icon}
          />
          <p className="default-text text-start">{value}</p>
        </>
      )}
    </Link>
  );
}
