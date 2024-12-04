export default function DefaultText({ value, children, custom }) {
  return (
    <p
      className={`text-sm font-['Raleway'] font-medium text-neutral-600 dark:text-neutral-400 ${custom}`}
    >
      {value}
      {children}
    </p>
  );
}
