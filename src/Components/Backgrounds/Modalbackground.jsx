export default function ModalBackground({ isOpen, onClick }) {
  if (isOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.removeProperty("overflow-y");
  }

  return (
    <div
      onClick={onClick}
      className={`${
        isOpen ? "block" : "hidden"
      } w-full h-full fixed top-0 right-0 bg-black/50`}
    ></div>
  );
}
