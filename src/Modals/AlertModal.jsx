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
          isError ? "border-red-400 " : "border-green-400"
        } border bg-white py-4 px-8 bottom-8 right-8 rounded-xl z-20`}
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
          <p className="font-medium font-['Raleway'] text-sm text-zinc-600">
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
