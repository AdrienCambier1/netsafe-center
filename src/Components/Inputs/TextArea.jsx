export default function TextArea({ onChange, value, placeholder }) {
  return (
    <div className="hover:border-neutral-600 focus-within:border-neutral-600 dark:hover:border-neutral-400 dark:focus-within:border-neutral-400 flex gap-1 border-2 rounded-xl dark:border-neutral-800 border-neutral-200 w-full overflow-hidden">
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="p-2 flex items-end bg-inherit dark:placeholder:text-neutral-700 placeholder:text-neutral-300 focus:outline-none w-full min-h-32 resize-none font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
      />
    </div>
  );
}
