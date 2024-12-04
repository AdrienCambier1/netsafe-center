export default function WhiteCard({ children }) {
  return (
    <div className="dark:bg-neutral-950 border border-transparent dark:border-neutral-800 dark:shadow-none bg-white relative rounded-xl h-fit w-full shadow-md shadow-gray-200/50 p-2">
      {children}
    </div>
  );
}
