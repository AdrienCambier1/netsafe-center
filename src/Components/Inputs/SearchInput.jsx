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
        placeholder={placeholder}
        value={searchTerm}
        className="flex items-end bg-inherit dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full font-medium text-sm dark:text-neutral-400 text-neutral-600"
        onChange={handleChange}
      />
      <IconPurpleButton icon={faPlus} onClick={onClick} isRoundedFull={true} />
    </div>
  );
}
