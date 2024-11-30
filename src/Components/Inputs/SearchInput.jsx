import { GrayButton } from "../Buttons";
import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";

export default function SearchInput({ placeholder, icon }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="hover:border-zinc-600 focus-within:border-zinc-600 dark:hover:border-zinc-400 dark:focus-within:border-zinc-400 flex gap-1 border-2 rounded-xl dark:border-zinc-800 border-zinc-200 w-full overflow-hidden">
      <GrayButton icon={icon} />
      <input
        placeholder={placeholder}
        value={searchTerm}
        className="flex items-end bg-inherit rounded-xl dark:placeholder:text-zinc-700 placeholder:text-zinc-300 focus:outline-none w-full pr-2 font-medium font-['Raleway'] text-sm dark:text-zinc-400 text-zinc-600"
        onChange={handleChange}
      />
    </div>
  );
}
