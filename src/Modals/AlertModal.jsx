import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";
import { DefaultText } from "../Components/Texts";

export default function AlertModal({ value, isActive, isError }) {
  const [show, setShow] = useState(isActive);
  let timer = useRef(null);

  useEffect(() => {
    if (isActive) {
      setShow(true);
      timer.current = setTimeout(() => setShow(false), 3500);

      return () => {
        if (timer.current) {
          clearTimeout(timer.current);
        }
      };
    }
  }, [isActive]);

  if (isActive) {
    return ReactDOM.createPortal(
      <div
        className={`${
          show ? "opacity-100" : "opacity-0"
        } transition-all duration-500 fixed ${
          isError ? "border-red-500/50" : "border-green-500/50"
        } border dark:bg-zinc-950 bg-white py-4 px-8 bottom-8 right-8 rounded-xl z-20`}
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
