import { IconPurpleButton } from "../Buttons";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput({ placeholder, onClick, value, onChange }) {
  return (
    <div className="group search-input">
      <FontAwesomeIcon className="gray-icon" icon={faSearch} />
      <input
        className="pr-4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <IconPurpleButton
        icon={faPlus}
        onClick={onClick}
        isRoundedFull={true}
        connectionRequired={true}
      />
    </div>
  );
}
