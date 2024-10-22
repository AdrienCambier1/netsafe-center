import React from "react";
import ReactDOM from "react-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { HeavyPurpleButton, GrayButton } from "../Components/Buttons";
import { SecondTitle } from "../Components/Titles";

export default function DialogModal({
  isOpen,
  onClose,
  onClick,
  title,
  description,
}) {
  return ReactDOM.createPortal(
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed inset-0 items-center justify-center z-50`}
    >
      <ModalBackground isOpen={isOpen} onClick={onClose} />

      <div className="w-[30rem] p-8 rounded-xl bg-white z-50 flex flex-col gap-6 items-center">
        <SecondTitle value={title} />
        <p className="font-['Raleway'] text-sm font-medium text-zinc-600">
          {description}
        </p>
        <div className="flex gap-4 w-full">
          <GrayButton background={true} value="Annuler" onClick={onClose} />
          <HeavyPurpleButton value="Se déconnecter" onClick={onClick} />
        </div>
      </div>
    </div>,

    document.querySelector("body")
  );
}
