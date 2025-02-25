import ReactDOM from "react-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { HeavyPurpleButton, GrayButton } from "../Components/Buttons";
import { useContext } from "react";
import { ModalContext } from "../Contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactFocusLock from "react-focus-lock";

export default function DialogModal({
  isOpen,
  onClose,
  onClick,
  title,
  description,
  action,
  alertId,
  icon,
  customBackground,
  customColor,
  link,
}) {
  const { setModalState } = useContext(ModalContext);

  const handleSubmission = (id) => {
    setModalState(id, true);
    onClose();
    onClick && onClick();
  };

  return ReactDOM.createPortal(
    <div className={`${isOpen ? "visible" : "invisible"} z-30 center-modal`}>
      <ModalBackground isOpen={isOpen} onClick={onClose} />
      <ReactFocusLock
        disabled={!isOpen}
        className={`${isOpen ? "opacity-100" : "opacity-0"} modal-card`}
      >
        <div
          className={`${customBackground} rounded-full flex items-center justify-center p-4 w-fit`}
        >
          <FontAwesomeIcon
            className={`p-4 h-4 w-4 ${customColor}`}
            icon={icon}
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="second-title">{title}</h2>
          <p className="default-text text-center">{description}</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <HeavyPurpleButton
            value={action}
            link={link}
            onClick={() => handleSubmission(alertId)}
          />
          <GrayButton background={true} value="Annuler" onClick={onClose} />
        </div>
      </ReactFocusLock>
    </div>,

    document.querySelector("body")
  );
}
