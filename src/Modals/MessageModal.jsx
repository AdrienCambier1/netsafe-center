import ReactDOM from "react-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { ModalContext } from "../Contexts";

export default function MessageModal({ value, isActive, modal }) {
  const { toggleModal } = useContext(ModalContext);
  let modalTimer = useRef(null);

  useEffect(() => {
    if (isActive) {
      modalTimer.current = setTimeout(() => toggleModal(modal), 4000);

      return () => {
        if (modalTimer.current) {
          clearTimeout(modalTimer.current);
        }
      };
    }
  }, [isActive]);

  return ReactDOM.createPortal(
    <div
      className={`${
        isActive ? "opacity-100 visible" : "opacity-0 invisible"
      } transition z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transparent-background rounded-md py-2 px-4`}
    >
      <p className="text-sm font-medium text-neutral-300">{value}</p>
    </div>,
    document.querySelector("body")
  );
}
