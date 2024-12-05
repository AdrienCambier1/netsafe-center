import { useRef, useEffect, useContext, useState } from "react";
import {
  faBookmark,
  faComment,
  faEllipsisH,
  faThumbsUp,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { WhiteCard, CommentCard } from "../Cards";
import { FourthTitle, SecondTitle } from "../Titles";
import { DefaultText, SmallerDarkText } from "../Texts";
import { GrayButton, MultipleButton, RoundedGrayButton } from "../Buttons";
import { AccountImage } from "../";
import { SubmitInput } from "../Inputs";
import { ModalContext } from "../../Contexts";

export default function NewsCard({
  title,
  image,
  content,
  user,
  date,
  like,
  comments,
  canModify,
}) {
  const { setModalState } = useContext(ModalContext);
  const [comment, setComment] = useState("");
  const [activeButtons, setActiveButtons] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveButtons(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

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

  const buttons = [
    { icon: faEdit, value: "Modifier" },
    { icon: faTrash, value: "Supprimer", isDangerous: true },
  ];

  return (
    <WhiteCard>
      <div className="flex flex-col p-2 gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AccountImage image={image} />
            <div className="flex gap-2 items-center ml-2">
              <DefaultText value={user} />
              <SmallerDarkText value={date} />
            </div>
          </div>
          {canModify && (
            <div className="relative" ref={menuRef}>
              <GrayButton
                icon={faEllipsisH}
                onClick={() => setActiveButtons(!activeButtons)}
              />
              {activeButtons && (
                <div className="absolute right-0">
                  <MultipleButton buttons={buttons} />
                </div>
              )}
            </div>
          )}
        </div>
        <SecondTitle value={title} />
        <DefaultText value={content} />
        <div className="flex justify-between items-start lg:items-center">
          <div className="flex gap-2">
            <RoundedGrayButton icon={faBookmark} />
            <RoundedGrayButton
              icon={faComment}
              value="Commentaires"
              onClick={() => setIsCommentOpen(!isCommentOpen)}
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
          <div className="border-t dark:border-neutral-800 border-neutral-200 my-2" />
          <div className="flex flex-col p-2 gap-4">
            <div className="flex gap-2">
              <SubmitInput
                placeholder="Rédiger un commentaire"
                icon={faPaperPlane}
                value={comment}
                onClick={handleCommentSubmit}
                onChange={(e) => setComment(e.target.value)}
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
