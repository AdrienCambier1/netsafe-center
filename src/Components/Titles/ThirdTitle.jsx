export default function ThirdTitle({ value }) {
  return (
    <div className="flex items-center relative h-fit">
      <div className="bg-purple-500 shadow-md shadow-purple-500/50 h-6 w-2 rounded-md mr-3"></div>
      <h3 className="text-xl text-zinc-800 dark:text-zinc-200 font-['Raleway'] font-medium">
        {value}
      </h3>
    </div>
  );
}
