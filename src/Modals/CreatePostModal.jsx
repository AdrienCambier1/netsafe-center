import ReactDOM from "react-dom";
import { SecondTitle, FourthTitle } from "../Components/Titles";
import { GrayButton, HeavyPurpleButton } from "../Components/Buttons";
import { ModalBackground } from "../Components/Backgrounds";
import { TextInput, TextArea } from "../Components/Inputs";
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import {
  CreatePostContext,
  PostErrorContext,
} from "../Contexts/CreatePostContext";
import { useContext, useState } from "react";

export default function CreatePostModal({ isOpen, onClose }) {
  const { createPost, setCreatePost } = useContext(CreatePostContext);
  const { postError, setPostError } = useContext(PostErrorContext);

  const handleCreatePost = () => {
    setCreatePost(true);
    onClose();
    resetForm();
    setTimeout(() => {
      setCreatePost(false);
    }, 5000);
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  return ReactDOM.createPortal(
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed inset-0 items-center justify-center z-50`}
    >
      <ModalBackground isOpen={isOpen} onClick={onClose} />

      <div className="w-[30rem] p-8 rounded-xl bg-white z-50 flex flex-col gap-6 items-center max-h-full overflow-y-scroll">
        <SecondTitle value="Rédigez votre post" />
        <div className="w-full flex flex-col gap-2">
          <FourthTitle value="Titre" />
          <TextInput
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre du post"
            icon={faHeading}
            value={title}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <FourthTitle value="Contenu du post" />
          <TextArea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Rédigez votre texte"
            value={content}
          />
        </div>
        <div className="flex gap-4 w-full">
          <GrayButton background={true} value="Annuler" onClick={handleClose} />
          <HeavyPurpleButton value="Envoyer" onClick={handleCreatePost} />
        </div>
      </div>
    </div>,

    document.querySelector("body")
  );
}
