import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GrayButton } from "../Buttons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function TextInput({
  onChange,
  value,
  placeholder,
  type,
  icon,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="transition group text-input w-full h-10 overflow-hidden">
      <FontAwesomeIcon className="gray-icon z-10" icon={icon} />
      <input
        onChange={onChange}
        type={type === "password" && isPasswordVisible ? "text" : type}
        value={value}
        placeholder={placeholder}
        className="absolute px-9 flex items-end bg-inherit dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full h-full font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
      />
      {type === "password" && (
        <GrayButton
          icon={!isPasswordVisible ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
          custom="z-10"
        />
      )}
    </div>
  );
}
