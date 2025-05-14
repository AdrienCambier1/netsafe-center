export default function CardContent({ description, value, button, onClick }) {
  return (
    <div className="flex flex-col py-2 gap-2 items-start">
      <h4>{description}</h4>
      <div className="flex justify-between items-center w-full gap-2">
        {value && (
          <p className="break-words default-text flex-1 basis-3/4">{value}</p>
        )}

        {button && (
          <button
            onClick={onClick}
            className="text-purple-btn flex-none basis-1/4 text-right"
          >
            {button}
          </button>
        )}
      </div>
    </div>
  );
}
