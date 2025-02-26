import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactFocusLock from "react-focus-lock";

export default function MultipleButton({ buttons, isOpen }) {
  return (
    <div className={`${isOpen ? "visible" : "invisible"}  absolute right-0`}>
      <ReactFocusLock
        disabled={!isOpen}
        className={`${
          isOpen ? "opacity-100" : "opacity-0"
        } transition multiple-btn`}
      >
        {buttons.map((button) => (
          <Link
            className="group flex gap-4 items-center justify-between rounded-md p-2"
            onClick={button.onClick}
          >
            {button.value && button.isDangerous ? (
              <p className="text-sm font-medium text-red-400 dark:text-red-600 group-hover:underline">
                {button.value}
              </p>
            ) : (
              <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500 group-hover:underline">
                {button.value}
              </p>
            )}
            {button.icon && (
              <FontAwesomeIcon
                className={`h-4 w-4 ${
                  button.isDangerous
                    ? "text-red-400 dark:text-red-600"
                    : "text-neutral-400 dark:text-neutral-500"
                }`}
                icon={button.icon}
              />
            )}
          </Link>
        ))}
      </ReactFocusLock>
    </div>
  );
}
