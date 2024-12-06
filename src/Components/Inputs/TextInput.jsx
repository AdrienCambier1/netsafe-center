import { GrayButton } from "../Buttons";

export default function TextInput({
  onChange,
  value,
  placeholder,
  type,
  icon,
}) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 focus-within:border-neutral-600 dark:focus-within:border-neutral-400 flex border rounded-xl dark:border-neutral-800 border-neutral-200 w-full h-10 overflow-hidden">
      <GrayButton icon={icon} />
      <input
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className="flex items-end bg-inherit dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full pr-2 font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
      />
    </div>
  );
}
