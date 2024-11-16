export default function ColoredText({ value, color }) {
  return (
    <p className={`text-${color} font-['Raleway'] text-sm font-bold`}>
      {value}
    </p>
  );
}
