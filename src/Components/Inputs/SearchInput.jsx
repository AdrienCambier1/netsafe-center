import { IconPurpleButton } from "../Buttons";
import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput({ placeholder, onClick }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="group search-input">
      <FontAwesomeIcon className="gray-icon" icon={faSearch} />
      <input
        className="pr-4"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
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
