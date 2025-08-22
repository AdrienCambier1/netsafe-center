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
    <div className="transition group text-input h-10">
      <FontAwesomeIcon className="gray-icon" icon={icon} />
      <input
        onChange={onChange}
        type={type === "password" && isPasswordVisible ? "text" : type}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      {type === "password" ? (
        <GrayButton
          icon={!isPasswordVisible ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
          custom="!bg-transparent"
        />
      ) : (
        <GrayButton icon={faEye} custom="invisible" />
      )}
    </div>
  );
}
