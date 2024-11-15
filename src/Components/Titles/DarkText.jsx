export default function DarkText({ value }) {
  return (
    <p className="dark:text-zinc-600 text-zinc-400 font-['Raleway'] font-medium text-xs">
      {value}
    </p>
  );
}
