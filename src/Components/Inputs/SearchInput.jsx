import { GrayButton } from "../Buttons";
import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";

export default function SearchInput({ placeholder, icon }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex gap-1 dark:bg-zinc-900 bg-zinc-50 dark:border-transparent border border-zinc-100 rounded-xl w-full transition-all ease-out">
      <GrayButton icon={icon} />
      <input
        placeholder={placeholder}
        value={searchTerm}
        className="flex items-end bg-inherit rounded-xl dark:placeholder:text-zinc-700 placeholder:text-zinc-300 focus:outline-none w-full pr-2 font-medium font-['Raleway'] text-sm dark:text-zinc-400 text-zinc-600"
        onChange={handleChange}
      ></input>
    </div>
  );
}
