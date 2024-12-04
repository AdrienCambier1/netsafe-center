import ReactDOM from "react-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { HeavyPurpleButton, GrayButton } from "../Components/Buttons";
import { SecondTitle } from "../Components/Titles";
import { useContext } from "react";
import { ModalContext } from "../Contexts";
import { DefaultText } from "../Components/Texts";

export default function DialogModal({
  isOpen,
  onClose,
  onClick,
  title,
  description,
  action,
  alertId,
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

        <div className="w-[30rem] p-8 rounded-xl dark:bg-neutral-950 border border-transparent dark:border-zinc-800 bg-white z-50 flex flex-col gap-6 items-center max-h-full overflow-y-scroll">
          <SecondTitle value={title} />
          <DefaultText custom="text-center" value={description} />
          <div className="flex flex-col gap-4 w-full">
            <HeavyPurpleButton
              value={action}
              onClick={() => handleSubmission(alertId)}
            />
            <GrayButton background={true} value="Annuler" onClick={onClose} />
          </div>
        </div>
      </div>,

      document.querySelector("body")
    );
  } else {
    return null;
  }
}
