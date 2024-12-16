import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultText } from "../Texts";

export default function MultipleButton({ buttons, customPosition }) {
  return (
    <div className={`${customPosition}`}>
      <div className="flex flex-col p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900">
        {buttons.map((button) => (
          <Link
            className={`${
              button.isDangerous
                ? "hover:bg-red-500 dark:hover:bg-red-700 hover:shadow-red-500/50 dark:hover:shadow-red-700/50"
                : null
            } shadow-md shadow-transparent group flex gap-4 items-center justify-between rounded-md p-2`}
            onClick={button.onClick}
          >
            {button.value && button.isDangerous ? (
              <p className="text-sm font-['Raleway'] font-medium text-red-500 group-hover:text-white">
                {button.value}
              </p>
            ) : (
              <DefaultText value={button.value} />
            )}
            {button.icon && (
              <FontAwesomeIcon
                className={`h-4 w-4 ${
                  button.isDangerous
                    ? "text-red-300 dark:text-red-700 group-hover:text-white"
                    : "text-neutral-300 group-hover:text-neutral-600 dark:text-neutral-700 dark:group-hover:text-neutral-400"
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
