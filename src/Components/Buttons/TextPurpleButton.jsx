import { Link } from "react-router-dom";

export default function TextPurpleButton({ value, onClick, link }) {
  return (
    <Link
      onClick={onClick}
      to={link}
      className="font-['Raleway'] text-sm text-purple-500 font-semibold hover:opacity-75 cursor-pointer break-words"
    >
      {value}
    </Link>
  );
}
