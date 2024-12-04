import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultText } from "../Texts";

export default function MultipleButton({ buttons, customPosition }) {
  return (
    <div className={`${customPosition}`}>
      <div className="flex flex-col p-2 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-950">
        {buttons.map((button) => (
          <Link
            className="group flex gap-4 items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md p-2"
            onClick={button.onClick}
          >
            {button.value && button.isDangerous ? (
              <p className="text-sm font-['Raleway'] font-medium text-red-500">
                {button.value}
              </p>
            ) : (
              <DefaultText value={button.value} />
            )}
            {button.icon && (
              <FontAwesomeIcon
                className={`h-4 w-4 ${
                  button.isDangerous
                    ? "text-red-300 dark:text-red-700 group-hover:text-red-500"
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
