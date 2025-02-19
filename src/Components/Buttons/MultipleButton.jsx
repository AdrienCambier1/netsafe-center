import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MultipleButton({ buttons, customPosition }) {
  return (
    <div className={`${customPosition}`}>
      <div className="flex flex-col p-2 rounded-xl backdrop-blur-sm bg-neutral-100/75 dark:bg-neutral-900/75">
        {buttons.map((button) => (
          <Link
            className="group flex gap-4 items-center justify-between rounded-md p-2"
            onClick={button.onClick}
          >
            {button.value && button.isDangerous ? (
              <p className="text-sm font-['Raleway'] font-medium text-red-400 dark:text-red-600 group-hover:underline">
                {button.value}
              </p>
            ) : (
              <p className="text-sm font-['Raleway'] font-medium text-neutral-400 dark:text-neutral-600 group-hover:underline">
                {button.value}
              </p>
            )}
            {button.icon && (
              <FontAwesomeIcon
                className={`h-4 w-4 ${
                  button.isDangerous
                    ? "text-red-400 dark:text-red-600"
                    : "text-neutral-400 dark:text-neutral-600"
                }`}
                icon={button.icon}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
