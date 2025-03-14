export default function CardContent({ description, value, button }) {
  return (
    <div className="flex flex-col py-2 gap-2 items-start">
      <h4 className="fourth-title">{description}</h4>
      <div className="flex justify-between items-center w-full gap-2">
        {value && (
          <p className="break-words default-text flex-1 basis-3/4">{value}</p>
        )}

        {button && (
          <p className="text-purple-btn flex-none basis-1/4 text-right">
            {button}
          </p>
        )}
      </div>
    </div>
  );
}
