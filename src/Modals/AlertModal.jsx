import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { DefaultText } from "../Components/Texts";
import { ModalContext } from "../Contexts";

export default function AlertModal({ value, isActive, isError, modal }) {
  const [show, setShow] = useState(isActive);
  const { toggleModal } = useContext(ModalContext);
  let showTimer = useRef(null);
  let modalTimer = useRef(null);

  useEffect(() => {
    if (isActive) {
      setShow(true);
      showTimer.current = setTimeout(() => setShow(false), 3500);
      modalTimer.current = setTimeout(() => toggleModal(modal), 4000);

      return () => {
        if (showTimer.current) {
          clearTimeout(showTimer.current);
        }
        if (modalTimer.current) {
          clearTimeout(modalTimer.current);
        }
      };
    }
  }, [isActive]);

  if (isActive) {
    return ReactDOM.createPortal(
      <div
        className={`${
          show ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 fixed ${
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
          <DefaultText value={value} />
        </div>
      </div>,
      document.querySelector("body")
    );
  } else {
    return null;
  }
}
