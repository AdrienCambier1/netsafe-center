import { IconPurpleButton } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsUpToLine,
  faArrowUp,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

export default function SubmitInput({
  placeholder,
  value,
  onChange,
  onClick,
  disabled,
}) {
  return (
    <div className="group submit-input">
      <FontAwesomeIcon className="gray-icon" icon={faPenNib} />
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      <IconPurpleButton
        icon={faArrowUp}
        onClick={onClick}
        disabled={disabled}
        connectionRequired={true}
      />
    </div>
  );
}
