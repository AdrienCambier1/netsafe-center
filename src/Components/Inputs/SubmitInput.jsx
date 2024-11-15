import { GrayButton } from "../Buttons";

export default function SubmitInput({ placeholder, icon, value, onChange }) {
  return (
    <div className="flex gap-1 dark:bg-zinc-900 bg-zinc-50 dark:border-transparent border border-zinc-100 rounded-xl w-full transition-all ease-out">
      <GrayButton icon={icon} />
      <input
        placeholder={placeholder}
        value={value}
        className="flex items-end bg-inherit rounded-xl dark:placeholder:text-zinc-700 placeholder:text-zinc-300 focus:outline-none w-full pr-2 font-medium font-['Raleway'] text-sm dark:text-zinc-400 text-zinc-600"
        onChange={onChange}
      />
    </div>
  );
}
