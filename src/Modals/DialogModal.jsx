import ReactDOM from "react-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { HeavyPurpleButton, GrayButton } from "../Components/Buttons";
import { SecondTitle } from "../Components/Titles";
import { useContext } from "react";
import { ModalContext } from "../Contexts";

export default function DialogModal({
  isOpen,
  onClose,
  onClick,
  title,
  description,
  action,
  alertId,
}) {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);

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
      <div className="flex fixed inset-0 items-center justify-center z-50">
        <ModalBackground isOpen={isOpen} onClick={onClose} />

        <div className="w-[30rem] p-8 rounded-xl bg-white z-50 flex flex-col gap-6 items-center max-h-full overflow-y-scroll">
          <SecondTitle value={title} />
          <p className="font-['Raleway'] text-sm font-medium text-zinc-600">
            {description}
          </p>
          <div className="flex gap-4 w-full">
            <GrayButton background={true} value="Annuler" onClick={onClose} />
            <HeavyPurpleButton
              value={action}
              onClick={() => handleSubmission(alertId)}
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
