import ReactDOM from "react-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { HeavyPurpleButton, GrayButton } from "../Components/Buttons";
import { SecondTitle } from "../Components/Titles";
import { useContext } from "react";
import { ModalContext } from "../Contexts";
import { DefaultText } from "../Components/Texts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalCard } from "../Components/Cards";

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
}) {
  const { setModalState } = useContext(ModalContext);

  const handleSubmission = (id) => {
    setModalState(id, true);
    onClose();
    onClick && onClick();
    setTimeout(() => {
      setModalState(id, false);
    }, 4000);
  };

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="flex fixed inset-0 items-center justify-center z-50 px-8">
        <ModalBackground isOpen={isOpen} onClick={onClose} />

        <ModalCard>
          <div
            className={`${customBackground} rounded-full flex items-center justify-center p-4 w-fit`}
          >
            <FontAwesomeIcon
              className={`p-4 h-4 w-4 ${customColor}`}
              icon={icon}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <SecondTitle value={title} />
            <DefaultText custom="text-center" value={description} />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <HeavyPurpleButton
              value={action}
              onClick={() => handleSubmission(alertId)}
            />
            <GrayButton background={true} value="Annuler" onClick={onClose} />
          </div>
        </ModalCard>
      </div>,

      document.querySelector("body")
    );
  } else {
    return null;
  }
}
