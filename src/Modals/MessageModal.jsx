import ReactDOM from "react-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { ModalContext } from "../Contexts";

export default function MessageModal({ value, isActive, modal }) {
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
        } opacity-transition z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translte-y-1/2 transparent-background rounded-md py-2 px-4`}
      >
        <p className="text-sm font-['Raleway'] font-medium text-neutral-300">
          {value}
        </p>
      </div>,
      document.querySelector("body")
    );
  } else {
    return null;
  }
}
