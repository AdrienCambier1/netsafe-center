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
        placeholder={placeholder}
        value={value}
        className="px-4 flex items-end bg-inherit dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
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
