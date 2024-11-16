export default function DarkText({ value }) {
  return (
    <p className="dark:text-zinc-600 text-zinc-400 text-sm font-['Raleway']">
      {value}
    </p>
  );
}
