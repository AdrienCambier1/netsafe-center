export default function CustomTitle({ value }) {
  return (
    <div className="flex items-center relative h-fit">
      <div className="bg-purple-shadow h-6 w-2 rounded-md mr-3"></div>
      <h3 className="third-title">{value}</h3>
    </div>
  );
}
