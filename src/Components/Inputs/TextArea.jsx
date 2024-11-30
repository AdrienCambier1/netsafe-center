export default function TextArea({ onChange, value, placeholder }) {
  return (
    <div className="p-2 hover:border-zinc-600 focus-within:border-zinc-600 dark:hover:border-zinc-400 dark:focus-within:border-zinc-400 flex gap-1 border-2 rounded-xl dark:border-zinc-800 border-zinc-200 w-full overflow-hidden">
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="flex items-end bg-inherit dark:placeholder:text-zinc-700 placeholder:text-zinc-300 focus:outline-none w-full min-h-32 resize-none font-medium font-['Raleway'] text-sm dark:text-zinc-400 text-zinc-600"
      />
    </div>
  );
}
