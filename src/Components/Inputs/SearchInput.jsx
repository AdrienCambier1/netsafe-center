import { GrayButton } from "../Buttons";
import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";

export default function SearchInput({ placeholder, icon }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="hover:border-neutral-600 focus-within:border-neutral-600 dark:hover:border-neutral-400 dark:focus-within:border-neutral-400 flex gap-1 border-2 rounded-xl dark:border-neutral-800 border-neutral-200 w-full h-10 overflow-hidden">
      <GrayButton icon={icon} />
      <input
        placeholder={placeholder}
        value={searchTerm}
        className="flex items-end bg-inherit rounded-xl dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full pr-2 font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
        onChange={handleChange}
      />
    </div>
  );
}
