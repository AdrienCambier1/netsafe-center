import { GrayButton } from "../Buttons";

export default function TextInput({
  onChange,
  value,
  placeholder,
  type,
  icon,
}) {
  return (
    <div className="hover:border-zinc-600 focus-within:border-zinc-600 dark:hover:border-zinc-400 dark:focus-within:border-zinc-400 flex gap-1 border-2 rounded-xl dark:border-zinc-800 border-zinc-200 w-full h-10 overflow-hidden">
      <GrayButton icon={icon} />
      <input
        onChange={onChange}
        type={type}
        value={value}
        S
        placeholder={placeholder}
        className="flex items-end bg-inherit dark:placeholder:text-zinc-700 placeholder:text-zinc-300 focus:outline-none w-full pr-2 font-medium font-['Raleway'] text-sm dark:text-zinc-400 text-zinc-600"
      />
    </div>
  );
}
