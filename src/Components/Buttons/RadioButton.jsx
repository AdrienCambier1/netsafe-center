import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function RadioButton({ onClick, isChecked }) {
  return (
    <button onClick={onClick} type="button" className="radio-btn">
      <FontAwesomeIcon
        className="p-2.5 h-4 w-4"
        icon={isChecked ? faCheck : faCircle}
      />
    </button>
  );
}
