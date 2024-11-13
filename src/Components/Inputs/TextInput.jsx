import { GrayButton } from "../Buttons";

export default function TextInput({
  onChange,
  value,
  placeholder,
  type,
  icon,
}) {
  return (
    <div className="flex gap-1 border bg-zinc-50 rounded-xl border-zinc-100 w-full transition-all ease-out overflow-hidden">
      <GrayButton icon={icon}></GrayButton>
      <input
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className="flex items-end bg-inherit placeholder:text-zinc-300 focus:outline-none w-full pr-2 font-medium font-['Raleway'] text-sm text-zinc-600"
      />
    </div>
  );
}
