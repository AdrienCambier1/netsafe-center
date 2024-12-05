import { GrayButton, IconPurpleButton } from "../Buttons";
import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput({ placeholder, onClick }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="dark:bg-neutral-900 bg-neutral-100 items-center flex rounded-full dark:border-neutral-800 border-neutral-200 w-full">
      <GrayButton icon={faSearch} />
      <input
        placeholder={placeholder}
        value={searchTerm}
        className="flex items-end bg-inherit dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
        onChange={handleChange}
      />
      <IconPurpleButton icon={faPlus} onClick={onClick} isRoundedFull={true} />
    </div>
  );
}
