import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

export default function AlertModal({ value, isActive, isError }) {
  const [show, setShow] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (isActive) {
    return ReactDOM.createPortal(
      <div
        className={`${
          show ? "opacity-100" : "opacity-0"
        } transition-all duration-500 fixed ${
          isError
            ? "bg-red-500 shadow-red-500/50"
            : "bg-green-500 shadow-green-500/50"
        } shadow-md py-4 px-8 bottom-8 right-8 rounded-xl z-40`}
      >
        <div className="flex gap-4 items-center">
          {isError ? (
            <FontAwesomeIcon
              icon={faXmarkCircle}
              className="h-4 w-4 text-white"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="h-4 w-4 text-white"
            />
          )}
          <p className="font-medium font-['Raleway'] text-sm text-white">
            {value}
          </p>
        </div>
      </div>,
      document.querySelector("body")
    );
  } else {
    return null;
  }
}
