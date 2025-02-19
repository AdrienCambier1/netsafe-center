export default function TextArea({ onChange, value, placeholder }) {
  return (
    <div className="transition text-input w-full overflow-hidden">
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="p-2 flex items-end bg-inherit dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full min-h-32 resize-none font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
      />
    </div>
  );
}
