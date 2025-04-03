import ReactDOM from "react-dom";
import { useEffect, useRef, useContext } from "react";
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
      } transition center transparent-background btn-description`}
    >
      <p>{value}</p>
    </div>,
    document.querySelector("body")
  );
}
