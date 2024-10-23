import { faHeart } from "@fortawesome/free-solid-svg-icons";
import AccountImage from "../AccountImage";
import { GrayButton } from "../Buttons";

export default function UserComment({ user, comment, date, like }) {
  return (
    <div className="flex flex-col w-fit">
      <div className="flex w-full flex-col gap-2">
        <div className="flex gap-2">
          <AccountImage />
          <div className="flex flex-col gap-2 w-fit">
            <div className="flex gap-2 items-center">
              <p className="text-zinc-600 font-['Raleway'] font-medium text-sm">
                {user}
              </p>
              <p className="text-zinc-400 font-['Raleway'] font-medium text-xs">
                {date}
              </p>
            </div>
            <p className="text-zinc-600 font-['Raleway'] font-medium text-sm bg-zinc-100 rounded-xl p-2 break-words">
              {comment}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center">
          <GrayButton icon={faHeart} />
          <p className="text-zinc-600 font-['Raleway'] text-sm">{like}</p>
        </div>
      </div>
    </div>
  );
}
