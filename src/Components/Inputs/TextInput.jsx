import { GrayButton } from "../Buttons";

export default function TextInput({
  onChange,
  value,
  placeholder,
  type,
  icon,
}) {
  return (
    <div className="hover:border-neutral-600 focus-within:border-neutral-600 dark:hover:border-neutral-400 dark:focus-within:border-neutral-400 flex gap-1 border-2 rounded-xl dark:border-neutral-800 border-neutral-200 w-full h-10 overflow-hidden">
      <GrayButton icon={icon} />
      <input
        onChange={onChange}
        type={type}
        value={value}
        S
        placeholder={placeholder}
        className="flex items-end bg-inherit dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full pr-2 font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
      />
    </div>
  );
}
