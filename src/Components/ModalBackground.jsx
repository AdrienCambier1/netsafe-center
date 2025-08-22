import { useEffect } from "react";

export default function ModalBackground({ isOpen, onClick }) {
  useEffect(() => {
    const hasVisibleModals = () => {
      return Array.from(document.querySelectorAll(".center-modal")).some(
        (modal) =>
          !modal.classList.contains("invisible") &&
          !modal.classList.contains("hidden")
      );
    };

    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else if (!hasVisibleModals()) {
      document.body.style.overflowY = "";
    }

    return () => {
      if (!hasVisibleModals()) {
        document.body.style.overflowY = "";
      }
    };
  }, [isOpen]);

  return (
    <div
      onClick={onClick}
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 backdrop-blur-[2px] cursor-pointer bg-black/50`}
    ></div>
  );
}
