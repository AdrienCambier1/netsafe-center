export default function HalfWhiteCard({ image, children }) {
  return (
    <div className="bg-white rounded-xl shadow-md shadow-purple-200/50 flex overflow-hidden h-fit max-h-full w-full md:w-fit">
      <img className="hidden md:block w-96 object-cover" src={image}></img>

      <div className="flex flex-col items-center gap-8 p-8 md:p-16 overflow-y-auto relative w-full md:w-96">
        {children}
      </div>
    </div>
  );
}
