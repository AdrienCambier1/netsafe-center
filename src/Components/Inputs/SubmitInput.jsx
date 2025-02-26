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
        className="px-4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
