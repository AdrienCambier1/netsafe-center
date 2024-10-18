import { GrayButton } from "../Buttons";

export default function SearchInput({ value, type, icon }) {
  return (
    <div className="flex gap-1 bg-zinc-100 rounded-xl w-full transition-all ease-out">
      <GrayButton icon={icon}></GrayButton>
      <input
        type={type}
        placeholder={value}
        className="flex items-end text-sm bg-inherit rounded-xl placeholder:text-zinc-300 text-zinc-600 font-['Raleway'] focus:outline-none w-full pr-2"
      ></input>
    </div>
  );
}
