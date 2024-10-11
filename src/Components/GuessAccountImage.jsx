import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GuessAccountImage() {
  return (
    <div className="bg-teal-50 text-teal-500 rounded-xl">
      <FontAwesomeIcon
        className="p-2.5 h-4 w-4"
        icon={faUser}
      ></FontAwesomeIcon>
    </div>
  );
}
