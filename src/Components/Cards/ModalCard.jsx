export default function ModalCard({ children }) {
  return (
    <div className="relative w-[30rem] p-8 rounded-xl dark:bg-neutral-950 border border-transparent dark:border-neutral-800 bg-white z-50 flex flex-col gap-8 max-h-full items-center overflow-y-scroll">
      {children}
    </div>
  );
}
