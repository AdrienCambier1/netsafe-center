export default function CardContent({ description, value, button }) {
  return (
    <div className="flex justify-between rounded-xl py-2 items-center">
      <div
        className={`${button ? "w-1/2 pr-2" : "w-full"} flex flex-col gap-1`}
      >
        <h4 className="fourth-title">{description}</h4>
        {value && <p className="break-words default-text">{value}</p>}
      </div>

      {button && (
        <div className="w-1/2 pl-2 text-right">
          <p className="text-purple-btn">{button}</p>
        </div>
      )}
    </div>
  );
}
