import { WhiteCard, CommentCard } from "../Cards";
import { FourthTitle, SecondTitle, DefaultText, DarkText } from "../Titles";
import { GrayButton, HeavyPurpleButton, RoundedGrayButton } from "../Buttons";
import {
  faBookmark,
  faComment,
  faPencilAlt,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { AccountImage } from "../";
import { SubmitInput } from "../Inputs";
import { ModalContext } from "../../Contexts";
import { useContext, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

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
  const { setModalState } = useContext(ModalContext);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    setModalState("commentAlert", true);
    resetComment();
    setTimeout(() => {
      setModalState("commentAlert", false);
    }, 4000);
  };

  const resetComment = () => {
    setComment("");
  };

  return (
    <WhiteCard>
      <div className="flex flex-col p-2 gap-4">
        <SecondTitle value={title} />
        <div className="flex items-center">
          <AccountImage image={image} />
          <div className="flex gap-2 items-center ml-2">
            <DefaultText value={user} />
            <DarkText value={date} />
          </div>
        </div>
        <div className="font-medium font-['Raleway'] text-sm dark:text-zinc-400 text-zinc-600">
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
            <GrayButton icon={faThumbsUp} />
            <DefaultText value={like} />
          </div>
        </div>
      </div>
      {isCommentOpen && (
        <>
          <div className="border-t dark:border-zinc-800 border-gray-300/50 my-2" />
          <div className="flex flex-col p-2 gap-4">
            <div className="flex gap-2">
              <SubmitInput
                placeholder="Rédiger un commentaire"
                icon={faPencilAlt}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <HeavyPurpleButton
                onClick={handleCommentSubmit}
                icon={faPaperPlane}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="my-2">
                <FourthTitle value="Tous les commentaires" />
              </div>

              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <CommentCard
                    key={index}
                    date={comment.date}
                    comment={comment.comment}
                    like={comment.like}
                    user={comment.user}
                    type="isAccount"
                  />
                ))
              ) : (
                <DefaultText value="Aucun commentaire" />
              )}
            </div>
          </div>
        </>
      )}
    </WhiteCard>
  );
}
