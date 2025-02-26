export default function Status({ isOk, value }) {
  if (isOk) {
    return (
      <div className="bg-teal border-teal w-fit rounded-full px-4 py-1 text-sm">
        {value}
      </div>
    );
  } else {
    return (
      <div className="bg-red border-red w-fit rounded-full px-4 py-1 text-sm">
        {value}
      </div>
    );
  }
}
