import { useRef, useEffect, useContext, useState } from "react";
import {
  faComment,
  faEllipsisH,
  faEdit,
  faTrash,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { CommentCard } from "../Cards";
import { CommentCardSkeleton } from "../Skeletons";
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
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function NewsCard({
  id,
  title,
  content,
  user,
  date,
  like,
  canModify,
}) {
  const { setModalState, toggleModal, setCurrentPostId } =
    useContext(ModalContext);
  const [comment, setComment] = useState("");
  const [activeMultipleButton, setActiveMultipleButton] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [commentsData, setCommentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isCommentOpen) {
      const fetchCommentsData = async () => {
        setIsLoading(true);

        const response = await fetch(
          `https://netsafe-center-backend.vercel.app/posts/${id}/comments`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const data = await response.json();
          setCommentsData(data);
        }

        setIsLoading(false);
      };

      fetchCommentsData();
    }
  }, [isCommentOpen]);

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
      onClick: () => {
        toggleModal("removePostDialog");
        setCurrentPostId(id);
      },
    },
  ];

  const isSubmitDisabled = !comment;

  return (
    <div className="card">
      <div className="flex flex-col p-2 gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AccountImage />
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
        <p
          className={`default-text whitespace-pre-wrap ${
            !isExpanded && "line-clamp-3"
          }`}
        >
          {content}
        </p>
        {content.length > 250 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="default-text underline w-fit"
          >
            {isExpanded ? "Voir moins" : "Voir plus"}
          </button>
        )}

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
          <div className="border-t border-color my-2" />
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
              <h4 className="my-2 fourth-title">Tous les commentaires</h4>
              {isLoading ? (
                <CommentCardSkeleton />
              ) : commentsData.length > 0 ? (
                commentsData.map((comment, index) => (
                  <CommentCard
                    key={index}
                    date={format(new Date(comment.created_at), "dd/MM/yyyy", {
                      locale: fr,
                    })}
                    comment={comment.content}
                    like={parseInt(comment.likes_count)}
                    user={comment.user_name}
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
