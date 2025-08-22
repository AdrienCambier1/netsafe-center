import { IconPurpleButton } from "../Buttons";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput({ placeholder, onClick, value, onChange }) {
  return (
    <div className="group search-input">
      <FontAwesomeIcon className="gray-icon" icon={faSearch} />
      <input 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        autoComplete="off"
        name={`search-${Math.random().toString(36).substr(2, 9)}`}
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
