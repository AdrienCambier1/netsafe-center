import AccountImage from "../AccountImage";
import { GrayButton } from "../../Components/Buttons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function CommentCard({ user, comment, date, like }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <div>
          <AccountImage />
        </div>
        <div className="py-2 h-full gap-1 w-full flex flex-col items-center">
          <div className="w-[1px] h-full bg-gray-300/50" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <p className="font-medium font-['Raleway'] text-sm text-zinc-600">
            {user}
          </p>
          <p className="font-medium font-['Raleway'] text-sm text-zinc-600">
            {comment}
          </p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <p className="text-zinc-400 font-['Raleway'] font-medium text-xs">
            {date} | J'aime
          </p>

          <div className="flex items-center">
            <GrayButton icon={faThumbsUp} />
            <p className="text-zinc-600 font-['Raleway'] text-sm">{like}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
