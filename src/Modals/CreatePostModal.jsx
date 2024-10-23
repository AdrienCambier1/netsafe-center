import ReactDOM from "react-dom";
import { SecondTitle, FourthTitle } from "../Components/Titles";
import { GrayButton, HeavyPurpleButton } from "../Components/Buttons";
import { ModalBackground } from "../Components/Backgrounds";
import { TextInput, TextArea } from "../Components/Inputs";
import { faHeading } from "@fortawesome/free-solid-svg-icons";

export default function CreatePostModal({ isOpen, onClose }) {
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
          <TextInput value="Titre du post" icon={faHeading} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <FourthTitle value="Contenu du post" />
          <TextArea value="Rédigez votre texte" />
        </div>
        <div className="flex gap-4 w-full">
          <GrayButton background={true} value="Annuler" onClick={onClose} />
          <HeavyPurpleButton value="Envoyer" />
        </div>
      </div>
    </div>,

    document.querySelector("body")
  );
}
