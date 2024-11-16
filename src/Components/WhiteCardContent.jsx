import { FourthTitle } from "./Titles";
import { Link } from "react-router-dom";
import { DefaultText } from "./Texts";

export default function WhiteCardContent({
  description,
  value,
  button,
  children,
}) {
  return (
    <div className="flex justify-between rounded-xl py-2 items-center gap-2">
      <div className={`${button ? "w-1/2" : "w-full"} flex flex-col gap-1`}>
        <FourthTitle value={description} />
        {value && <DefaultText value={value} />}
      </div>

      {button && (
        <div className="w-1/2 text-right">
          <Link className="font-['Raleway'] text-sm text-purple-500 font-semibold hover:opacity-75 cursor-pointer">
            {button}
          </Link>
        </div>
      )}
    </div>
  );
}
