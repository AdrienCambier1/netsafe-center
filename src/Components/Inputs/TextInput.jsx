import { GrayButton } from "../Buttons";

export default function TextInput({
  onChange,
  value,
  placeholder,
  type,
  icon,
}) {
  return (
    <div className="flex gap-1 border dark:bg-zinc-900 bg-zinc-50 rounded-xl dark:border-transparent border-zinc-100 w-full overflow-hidden">
      <GrayButton icon={icon} />
      <input
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className="flex items-end bg-inherit dark:placeholder:text-zinc-700 placeholder:text-zinc-300 focus:outline-none w-full pr-2 font-medium font-['Raleway'] text-sm dark:text-zinc-400 text-zinc-600"
      />
    </div>
  );
}
