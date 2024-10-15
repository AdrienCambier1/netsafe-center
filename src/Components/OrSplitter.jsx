import TitleMenu from "./Titles/TitleMenu";

export default function OrSplitter({ value }) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="border-t border-gray-300/50 flex-1"></div>
      <TitleMenu value={value}></TitleMenu>
      <div className="border-t border-gray-300/50 flex-1"></div>
    </div>
  );
}
