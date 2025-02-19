import ReactDOM from "react-dom";
import { GrayButton, HeavyPurpleButton } from "../Components/Buttons";
import { ModalBackground } from "../Components/Backgrounds";
import { TextInput, TextArea } from "../Components/Inputs";
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../Contexts";
import { useContext, useState } from "react";
import { ModalCard } from "../Components/Cards";

export default function CreatePostModal({ isOpen }) {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = () => {
    toggleModal("createPostModal");
    setModalState("postAlert", true);
    resetForm();
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

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="flex fixed inset-0 items-center justify-center z-50 px-8">
        <ModalBackground isOpen={isOpen} onClick={handleClose} />
        <ModalCard>
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
            <GrayButton
              background={true}
              value="Annuler"
              onClick={handleClose}
            />
          </div>
        </ModalCard>
      </div>,
      document.querySelector("body")
    );
  } else {
    return null;
  }
}
