export default function Status({ isOk, value }) {
  if (isOk) {
    return (
      <div className="dark:bg-teal-950 bg-teal-50 dark:border-teal-900 border-teal-100 text-teal-500 w-fit border rounded-full px-4 py-1 text-sm">
        {value}
      </div>
    );
  } else {
    return (
      <div className="dark:bg-red-950 bg-red-50 dark:border-red-900 border-red-100 text-red-500 w-fit border rounded-full px-4 py-1 text-sm">
        {value}
      </div>
    );
  }
}
