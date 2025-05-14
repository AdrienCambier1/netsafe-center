import ReactDOM from "react-dom";
import { GrayButton, HeavyPurpleButton } from "../Components/Buttons";
import { ModalBackground } from "../Components";
import { TextInput } from "../Components/Inputs";
import { ModalContext, ConnectionContext } from "../Contexts";
import { useContext, useState } from "react";
import ReactFocusLock from "react-focus-lock";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function ModifyEmailModal({ isOpen }) {
  const { toggleModal } = useContext(ModalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    toggleModal("modifyEmailModal");
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const isSubmitDisabled = !email || !password;

  return ReactDOM.createPortal(
    <div className={`${isOpen ? "visible" : "invisible"} z-30 center-modal`}>
      <ModalBackground isOpen={isOpen} onClick={handleClose} />
      <ReactFocusLock
        disabled={!isOpen}
        className={`${isOpen ? "opacity-100" : "opacity-0"} modal-card`}
      >
        <h2>Modifier l'email</h2>
        <div className="w-full flex flex-col gap-2">
          <p className="default-text">Nouvel email</p>
          <TextInput
            placeholder="Adresse e-mail"
            type="text"
            icon={faEnvelope}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="default-text">Confirmer avec votre mot de passe</p>
          <TextInput
            placeholder="Mot de passe"
            type="password"
            icon={faLock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <button
            className="heavy-purple-btn justify-center"
            type="button"
            disabled={isSubmitDisabled}
          >
            Modifier
          </button>
          <GrayButton background={true} value="Annuler" onClick={handleClose} />
        </div>
      </ReactFocusLock>
    </div>,
    document.querySelector("body")
  );
}
