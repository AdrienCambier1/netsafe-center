import ReactDOM from "react-dom";
import { GrayButton, HeavyPurpleButton } from "../Components/Buttons";
import { ModalBackground } from "../Components";
import { TextInput } from "../Components/Inputs";
import { ModalContext, ConnectionContext } from "../Contexts";
import { useContext, useState } from "react";
import ReactFocusLock from "react-focus-lock";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { RadioButton } from "../Components/Buttons";

export default function ModifyPasswordModal({ isOpen }) {
  const { toggleModal } = useContext(ModalContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleClose = () => {
    toggleModal("modifyPasswordModal");
    resetForm();
  };

  const resetForm = () => {
    setCurrentPassword("");
    setNewPassword("");
    setPasswordConfirmation("");
  };

  const hasEightChars = (value) => {
    return value.length >= 8;
  };

  const hasNumberAndSpecial = (value) => {
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

    return hasNumber && hasSpecialChar;
  };

  const passwordMatch = () => {
    return newPassword === passwordConfirmation;
  };

  const isSubmitDisabled =
    !currentPassword ||
    !newPassword ||
    !passwordConfirmation ||
    !hasEightChars(newPassword) ||
    !hasNumberAndSpecial(newPassword) ||
    !passwordMatch();

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="z-30 center-modal">
      <ModalBackground isOpen={isOpen} onClick={handleClose} />
      <ReactFocusLock
        autoFocus={false}
        disabled={!isOpen}
        className="modal-card"
      >
        <h2>Modifier le mot de passe</h2>
        <div className="w-full flex flex-col gap-2">
          <p className="default-text">Mot de passe actuel</p>
          <TextInput
            placeholder="Mot de passe"
            type="text"
            icon={faLock}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <p className="default-text">Nouveau mot de passe</p>
            <TextInput
              placeholder="Mot de passe"
              type="password"
              icon={faLock}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {newPassword &&
              (!hasEightChars(newPassword) ||
                !hasNumberAndSpecial(newPassword)) && (
                <p className="text-error">Mot de passe non sécurisé</p>
              )}
          </div>
          <TextInput
            placeholder="Confirmation du mot de passe"
            type="password"
            icon={faLock}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
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
