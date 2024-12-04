import { FourthTitle } from "./Titles";

export default function OrSplitter({ value }) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="border-t dark:border-neutral-800 border-neutral-200 flex-1"></div>
      <FourthTitle value={value} />
      <div className="border-t dark:border-neutral-800 border-neutral-200 flex-1"></div>
    </div>
  );
}
