import { FourthTitle } from "./Titles";
import { Link } from "react-router-dom";

export default function WhiteCardContent({
  description,
  value,
  button,
  children,
}) {
  return (
    <div className="flex justify-between rounded-xl py-2 items-center gap-2">
      <div className="w-1/2 flex flex-col gap-1">
        <FourthTitle value={description} />
        {value && (
          <p className="text-sm font-['Raleway'] font-medium text-zinc-600 dark:text-zinc-400">
            {value}
          </p>
        )}
      </div>

      <div className="w-1/2 text-right">
        {button && (
          <Link className="break-words font-['Raleway'] text-sm text-purple-500 font-semibold hover:opacity-75 cursor-pointer">
            {button}
          </Link>
        )}
      </div>
    </div>
  );
}
