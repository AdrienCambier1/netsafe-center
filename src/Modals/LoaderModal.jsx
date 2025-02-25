import ReactDOM from "react-dom";

export default function LoaderModal({ isLoading }) {
  return ReactDOM.createPortal(
    <div
      className={`${
        isLoading ? "opacity-100 visible" : "opacity-0 invisible"
      } z-[999] center-modal transition`}
    >
      <div className="transparent-background rounded-3xl p-8">
        <div className="loader"></div>
      </div>
    </div>,
    document.querySelector("body")
  );
}
