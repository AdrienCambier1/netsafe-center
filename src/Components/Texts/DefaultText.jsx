export default function DefaultText({ value, children, custom }) {
  return (
    <p
      className={`text-sm font-['Raleway'] font-medium text-zinc-600 dark:text-zinc-400 ${custom}`}
    >
      {value}
      {children}
    </p>
  );
}
