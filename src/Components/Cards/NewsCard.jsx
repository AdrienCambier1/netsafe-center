import { useRef, useEffect, useContext, useState } from "react";
import {
  faBookmark,
  faComment,
  faEllipsisH,
  faEdit,
  faTrash,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { CommentCard } from "../Cards";
import {
  GrayButton,
  LikeButton,
  MultipleButton,
  RoundedGrayButton,
  SaveButton,
} from "../Buttons";
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
  const { setModalState, toggleModal } = useContext(ModalContext);
  const [comment, setComment] = useState("");
  const [activeMultipleButton, setActiveMultipleButton] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMultipleButton(false);
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
  };

  const resetComment = () => {
    setComment("");
  };

  const buttons = [
    { icon: faEdit, value: "Modifier" },
    {
      icon: faTrash,
      value: "Supprimer",
      isDangerous: true,
      onClick: () => toggleModal("removePostDialog"),
    },
  ];

  const isSubmitDisabled = !comment;

  return (
    <div className="card">
      <div className="flex flex-col p-2 gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AccountImage image={image} />
            <div className="flex gap-2 items-center ml-2">
              <p className="default-text">{user}</p>
              <p className="smaller-dark-text">{date}</p>
            </div>
          </div>
          {canModify && (
            <div className="relative" ref={menuRef}>
              <GrayButton
                icon={faEllipsisH}
                onClick={() => setActiveMultipleButton(!activeMultipleButton)}
              />
              <MultipleButton buttons={buttons} isOpen={activeMultipleButton} />
            </div>
          )}
        </div>
        <h2 className="second-title">{title}</h2>
        <p className="default-text">{content}</p>
        <div className="flex justify-between items-start lg:items-center">
          <div className="flex gap-2">
            <SaveButton />
            <RoundedGrayButton
              icon={faComment}
              value="Commentaires"
              onClick={() => setIsCommentOpen(!isCommentOpen)}
            />
          </div>
          <LikeButton value={like} connectionRequired={true} />
        </div>
      </div>
      {isCommentOpen && (
        <>
          <div className="border-t dark:border-neutral-800 border-neutral-200 my-2" />
          <div className="flex flex-col p-2 gap-4">
            <div className="flex gap-2">
              <SubmitInput
                placeholder="Rédiger un commentaire"
                icon={faArrowUp}
                value={comment}
                onClick={handleCommentSubmit}
                onChange={(e) => setComment(e.target.value)}
                disabled={isSubmitDisabled}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="my-2">
                <h4 className="fourth-title">Tous les commentaires</h4>
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
                <p className="default-text">Aucun commentaire</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
