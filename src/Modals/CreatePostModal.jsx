import ReactDOM from "react-dom";
import { SecondTitle } from "../Components/Titles";
import { GrayButton, HeavyPurpleButton } from "../Components/Buttons";
import { ModalBackground } from "../Components/Backgrounds";
import { TextInput, TextArea } from "../Components/Inputs";
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../Contexts";
import { useContext, useState } from "react";
import { DefaultText } from "../Components/Texts";

export default function CreatePostModal({ isOpen }) {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = () => {
    setModalState("postAlert", true);
    toggleModal("createPostModal");
    resetForm();
    setTimeout(() => {
      setModalState("postAlert", false);
    }, 4000);
  };

  const handleClose = () => {
    toggleModal("createPostModal");
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="flex fixed inset-0 items-center justify-center z-50 px-8">
        <ModalBackground isOpen={isOpen} onClick={handleClose} />

        <div className="w-[30rem] p-8 rounded-xl dark:bg-neutral-950 border border-transparent dark:border-neutral-800 bg-white z-50 flex flex-col gap-6 items-center max-h-full overflow-y-scroll">
          <SecondTitle value="Rédigez votre post" />
          <div className="w-full flex flex-col gap-2">
            <DefaultText value="Titre" />
            <TextInput
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre du post"
              icon={faHeading}
              value={title}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <DefaultText value="Contenu du post" />
            <TextArea
              onChange={(e) => setContent(e.target.value)}
              placeholder="Rédigez votre texte"
              value={content}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <HeavyPurpleButton value="Envoyer" onClick={handleCreatePost} />
            <GrayButton
              background={true}
              value="Annuler"
              onClick={handleClose}
            />
          </div>
        </div>
      </div>,

      document.querySelector("body")
    );
  } else {
    return null;
  }
}
