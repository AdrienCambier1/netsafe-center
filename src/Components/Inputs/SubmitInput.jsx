import { faPen } from "@fortawesome/free-solid-svg-icons";
import { IconPurpleButton } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubmitInput({
  placeholder,
  icon,
  value,
  onChange,
  onClick,
  disabled,
}) {
  return (
    <div className="group search-input">
      <input
        className="px-3 rounded-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      <IconPurpleButton
        icon={icon}
        onClick={onClick}
        disabled={disabled}
        connectionRequired={true}
      />
    </div>
  );
}
