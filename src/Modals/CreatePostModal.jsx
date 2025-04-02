import ReactDOM from "react-dom";
import { GrayButton, HeavyPurpleButton } from "../Components/Buttons";
import { ModalBackground } from "../Components";
import { TextInput, TextArea } from "../Components/Inputs";
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { ModalContext, ConnectionContext } from "../Contexts";
import { useContext, useState } from "react";
import ReactFocusLock from "react-focus-lock";

export default function CreatePostModal({ isOpen }) {
  const { modals, toggleModal, setModalState, setNewPost } =
    useContext(ModalContext);
  const { auth, authFetch } = useContext(ConnectionContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    setModalState("isLoading", true);
    try {
      const requestBody = {
        title: title,
        content: content,
        user_id: 1,
      };

      const response = await authFetch(
        `https://netsafe-center-backend.vercel.app/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const newPostData = await response.json();

        setNewPost({
          id: newPostData.id,
          title: title,
          content: content,
          user_name: auth.identifiant,
          created_at: new Date().toISOString(),
          likes_count: "0",
        });

        setModalState("removePostAlert", false);
        setModalState("postAlert", true);
        toggleModal("createPostModal");
        resetForm();
      } else {
        setModalState("tryCreatePostAlert", true);
      }
    } catch (error) {
      setModalState("tryCreatePostAlert", true);
    } finally {
      setModalState("isLoading", false);
    }
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

  return ReactDOM.createPortal(
    <div className={`${isOpen ? "visible" : "invisible"} z-30 center-modal`}>
      <ModalBackground isOpen={isOpen} onClick={handleClose} />
      <ReactFocusLock
        disabled={!isOpen}
        className={`${isOpen ? "opacity-100" : "opacity-0"} modal-card`}
      >
        <h2 className="second-title">Rédigez votre post</h2>
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
          <TextArea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Rédigez votre texte"
            value={content}
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <HeavyPurpleButton
            value="Envoyer"
            onClick={handleCreatePost}
            disabled={isSubmitDisabled}
          />
          <GrayButton background={true} value="Annuler" onClick={handleClose} />
        </div>
      </ReactFocusLock>
    </div>,
    document.querySelector("body")
  );
}
