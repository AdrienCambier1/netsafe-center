import ReactDOM from "react-dom";

export default function LoaderModal({ isLoading }) {
  if (isLoading) {
    return ReactDOM.createPortal(
      <div className="z-[999] center-modal">
        <div className="transparent-background rounded-3xl p-8">
          <div className="loader"></div>
        </div>
      </div>,
      document.querySelector("body")
    );
  } else {
    return null;
  }
}
