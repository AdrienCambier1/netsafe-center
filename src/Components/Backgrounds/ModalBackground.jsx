import { useEffect } from "react";

export default function ModalBackground({ isOpen, onClick }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.removeProperty("overflow-y");
    }

    return () => {
      document.body.style.removeProperty("overflow-y");
    };
  }, [isOpen]);

  return (
    <div
      onClick={onClick}
      className={`${
        isOpen ? "block" : "hidden"
      } fixed h-screen w-screen top-0 left-0 bg-black/50`}
    ></div>
  );
}
