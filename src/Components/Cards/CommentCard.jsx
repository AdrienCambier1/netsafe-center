import AccountImage from "../AccountImage";
import { GrayButton } from "../../Components/Buttons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { DefaultText, DarkText } from "../Titles";

export default function CommentCard({ user, comment, date, like }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <div>
          <AccountImage />
        </div>
        <div className="pt-2 h-full gap-1 w-full flex flex-col items-center">
          <div className="w-[1px] h-full dark:bg-zinc-800 bg-gray-300/50" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <DefaultText value={user} />
          <DefaultText value={comment} />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <DarkText value={`${date} | J'aime`} />

          <div className="flex items-center">
            <GrayButton icon={faThumbsUp} />
            <DefaultText value={like} />
          </div>
        </div>
      </div>
    </div>
  );
}
