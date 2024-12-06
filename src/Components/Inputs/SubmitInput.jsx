import { faPen } from "@fortawesome/free-solid-svg-icons";
import { IconPurpleButton, GrayButton } from "../Buttons";

export default function SubmitInput({
  placeholder,
  icon,
  value,
  onChange,
  onClick,
  disabled,
}) {
  return (
    <div className="dark:bg-neutral-900 bg-neutral-100 items-center flex rounded-full dark:border-neutral-800 border-neutral-200 w-full">
      <GrayButton icon={faPen} />
      <input
        placeholder={placeholder}
        value={value}
        className="flex items-end bg-inherit dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
        onChange={onChange}
      />
      <IconPurpleButton icon={icon} onClick={onClick} disabled={disabled} />
    </div>
  );
}
