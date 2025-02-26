export default function OrSplitter({ value }) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="border-t border-color flex-1"></div>
      <h4 className="fourth-title">{value}</h4>
      <div className="border-t border-color flex-1"></div>
    </div>
  );
}
