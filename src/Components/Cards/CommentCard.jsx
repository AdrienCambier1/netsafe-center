import AccountImage from "../AccountImage";
import { LikeButton } from "../../Components/Buttons";

export default function CommentCard({ user, comment, date, like, isLast }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <div>
          <AccountImage />
        </div>
        <div className="pt-2 h-full gap-1 w-full flex flex-col items-center">
          <div className="w-[1px] h-full dark:bg-neutral-800 bg-neutral-200" />
        </div>
      </div>
      <div
        className={`${!isLast && "pb-4"} flex flex-col gap-2 overflow-hidden`}
      >
        <div className="flex gap-2 items-center">
          <p className="default-text">{user}</p>
          <p className="smaller-dark-text">{date}</p>
        </div>
        <p className="default-text whitespace-pre-wrap">{comment}</p>
        <LikeButton value={like} connectionRequired={true} />
      </div>
    </div>
  );
}
