export default function TitleSection({ value }) {
  return (
    <div className="flex items-center">
      <div className="bg-purple-500 shadow-md shadow-purple-500/50 h-full w-2 rounded-md mr-3"></div>
      <h2 className="text-xl text-zinc-800 font-['Raleway'] font-medium">
        {value}
      </h2>
    </div>
  );
}
