import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { ModalContext } from "../Contexts";

export default function AlertModal({ value, isActive, isError, modal }) {
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
      } transition fixed ${
        isError ? "border-red-500/50" : "border-green-500/50"
      } border dark:bg-neutral-950 bg-white py-4 px-8 bottom-8 right-8 rounded-xl z-20`}
    >
      <div className="flex gap-4 items-center">
        {isError ? (
          <FontAwesomeIcon
            icon={faXmarkCircle}
            className="h-4 w-4 text-red-500"
          />
        ) : (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="h-4 w-4 text-green-500"
          />
        )}
        <p className="default-text">{value}</p>
      </div>
    </div>,
    document.querySelector("body")
  );
}
