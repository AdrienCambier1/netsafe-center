import ReactDOM from "react-dom";
import { GrayButton } from "../Components/Buttons";
import { ModalBackground } from "../Components";
import { TextInput } from "../Components/Inputs";
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { ModalContext, ConnectionContext } from "../Contexts";
import { useContext, useState } from "react";
import ReactFocusLock from "react-focus-lock";

export default function CreatePostModal({ isOpen }) {
  const { toggleModal, setModalState, setNewPost } = useContext(ModalContext);
  const { auth, authFetch } = useContext(ConnectionContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    setModalState("isLoading", true);

    const requestBody = {
      title: title,
      content: content,
      user_id: auth.id,
    };

    const response = await authFetch(
      `https://netsafe-center-backend.vercel.app/posts`,
      {
        method: "POST",
        body: JSON.stringify(requestBody),
      }
    );

    if (response.ok) {
      const newPostData = await response.json();

      setNewPost({
        id: newPostData.id,
        title: newPostData.title,
        content: newPostData.content,
        user: { identifiant: auth.identifiant },
        created_at: newPostData.created_at,
        likes_count: 0,
      });

      setModalState("removePostAlert", false);
      setModalState("postAlert", true);
      toggleModal("createPostModal");
      resetForm();
    } else {
      setModalState("tryCreatePostAlert", true);
    }

    setModalState("isLoading", false);
  };

  const handleClose = () => {
    toggleModal("createPostModal");
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  const isSubmitDisabled = !title || !content;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="z-30 center-modal">
      <ModalBackground isOpen={isOpen} onClick={handleClose} />
      <ReactFocusLock
        autoFocus={false}
        disabled={!isOpen}
        className="modal-card"
      >
        <h2>Rédigez votre post</h2>
        <div className="w-full flex flex-col gap-2">
          <p className="default-text">Titre</p>
          <TextInput
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre du post"
            icon={faHeading}
            value={title}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="default-text">Contenu du post</p>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Rédigez votre texte"
            value={content}
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <button
            className="heavy-purple-btn justify-center"
            type="button"
            onClick={handleCreatePost}
            disabled={isSubmitDisabled}
          >
            Envoyer
          </button>
          <GrayButton
            background={true}
            value="Annuler"
            onClick={handleClose}
            custom="!w-full"
          />
        </div>
      </ReactFocusLock>
    </div>,
    document.querySelector("body")
  );
}
