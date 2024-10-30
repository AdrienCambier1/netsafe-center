import { WhiteCard, FeedCard } from "../Cards";
import { FourthTitle, SecondTitle } from "../Titles";
import { GrayButton, HeavyPurpleButton, RoundedGrayButton } from "../Buttons";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import AccountImage from "../AccountImage";
import { SearchInput } from "../Inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewsCard({
  title,
  image,
  content,
  user,
  date,
  like,
  isCommentOpen,
  openComment,
  comments,
}) {
  return (
    <WhiteCard>
      <div className="flex flex-col p-2 gap-4">
        <SecondTitle value={title} />
        <div className="flex items-center">
          <AccountImage image={image} />
          <div className="flex gap-2 items-center ml-2">
            <p className="text-zinc-600 font-['Raleway'] font-medium text-sm">
              {user}
            </p>
            <p className="text-zinc-400 font-['Raleway'] font-medium text-xs">
              {date}
            </p>
          </div>
        </div>
        <div className="font-medium font-['Raleway'] text-sm text-zinc-600">
          {content}
        </div>
        <div className="flex justify-between items-start lg:items-center">
          <div className="flex gap-2">
            <RoundedGrayButton icon={faBookmark} />
            <RoundedGrayButton
              icon={faComment}
              value="Commentaires"
              onClick={openComment}
            />
          </div>
          <div className="flex items-center justify-end w-full">
            <GrayButton icon={faHeart} />
            <p className="text-zinc-600 font-['Raleway'] text-sm">{like}</p>
          </div>
        </div>
      </div>
      {isCommentOpen && (
        <>
          <div className="border-t border-gray-300/50 my-2" />
          <div className="flex flex-col p-2 gap-4">
            <div className="flex gap-2">
              <SearchInput
                placeholder="Rédiger un commentaire"
                icon={faComment}
              />
              <HeavyPurpleButton icon={faPaperPlane} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="my-2">
                <FourthTitle value="Tous les commentaires" />
              </div>

              {comments.length > 0 ? (
                <ul
                  aria-label="User feed"
                  role="feed"
                  className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
                >
                  {comments.map((comment, index) => (
                    <FeedCard
                      key={index}
                      date={comment.date}
                      comment={comment.comment}
                      like={comment.like}
                      user={comment.user}
                      type="isAccount"
                    />
                  ))}
                </ul>
              ) : (
                <p className="text-zinc-600 text-sm font-['Raleway'] font-medium">
                  Aucun commentaire
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </WhiteCard>
  );
}
