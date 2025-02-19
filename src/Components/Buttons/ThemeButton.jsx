export default function ThemeButton({ img, value, selected, onClick }) {
  return (
    <div className="flex flex-col gap-2">
      <img
        onClick={onClick}
        src={img}
        alt={img}
        className={`${
          selected
            ? "outline-purple-500"
            : "hover:outline-purple-500 outline-transparent"
        } transition outline outline-2 outline-offset-2 rounded-xl border dark:border-neutral-800 border-neutral-200`}
      />
      <p className="default-text">{value}</p>
    </div>
  );
}
