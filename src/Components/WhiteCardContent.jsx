import { FourthTitle } from "./Titles";
import { Link } from "react-router-dom";
import { DefaultText } from "./Texts";
import { TextPurpleButton } from "./Buttons";

export default function WhiteCardContent({ description, value, button }) {
  return (
    <div className="flex justify-between rounded-xl py-2 items-center">
      <div
        className={`${button ? "w-1/2 pr-2" : "w-full"} flex flex-col gap-1`}
      >
        <FourthTitle value={description} />
        {value && <DefaultText custom="break-words" value={value} />}
      </div>

      {button && (
        <div className="w-1/2 pl-2 text-right">
          <TextPurpleButton value={button} />
        </div>
      )}
    </div>
  );
}
