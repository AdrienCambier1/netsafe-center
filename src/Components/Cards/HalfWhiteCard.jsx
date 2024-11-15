export default function HalfWhiteCard({ image, children }) {
  return (
    <div className="dark:bg-zinc-950 bg-white border dark:border-zinc-800 border-transparent rounded-xl dark:shadow-none shadow-md shadow-gray-200/50 flex overflow-hidden h-fit max-h-full w-full md:w-fit">
      <img className="hidden md:block w-96 object-cover" src={image}></img>

      <div className="flex flex-col items-center gap-8 p-8 md:p-16 overflow-y-auto relative w-full md:w-96">
        {children}
      </div>
    </div>
  );
}
