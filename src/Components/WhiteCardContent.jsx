import FourthTitle from "./Titles/FourthTitle";

export default function WhiteCardContent({ description, value, button }) {
  return (
    <div className="flex justify-between rounded-xl py-2 items-center gap-2">
      <div className="w-1/2 flex flex-col gap-1">
        <FourthTitle value={description}></FourthTitle>
        <p className="text-sm font-['Raleway'] font-medium text-zinc-600">
          {value}
        </p>
      </div>
      <div className="w-1/2 text-right">
        {button ? (
          <a className="break-words font-['Raleway'] text-sm text-purple-500 font-semibold hover:opacity-75 cursor-pointer">
            {button}
          </a>
        ) : null}
      </div>
    </div>
  );
}
