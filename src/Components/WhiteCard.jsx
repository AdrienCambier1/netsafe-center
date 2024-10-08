export default function WhiteCard({ children }) {
  return (
    <div className="bg-white rounded-xl h-fit w-full shadow-md shadow-purple-200/50 p-2">
      {children}
    </div>
  );
}
