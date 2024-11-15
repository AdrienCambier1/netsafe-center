export default function DefaultText({ value, children }) {
  return (
    <p className="text-sm font-['Raleway'] font-medium text-zinc-600 dark:text-zinc-400">
      {value}
      {children}
    </p>
  );
}
