export default function TextArea({ value }) {
  return (
    <div className="p-2 flex gap-1 border-2 rounded-xl border-zinc-300 w-full hover:border-zinc-600 focus-within:border-zinc-600 transition-all ease-out overflow-hidden">
      <textarea
        placeholder={value}
        className="flex items-end text-sm bg-inherit placeholder:text-zinc-300 text-zinc-600 font-['Raleway'] focus:outline-none w-full min-h-32 resize-none"
      />
    </div>
  );
}
