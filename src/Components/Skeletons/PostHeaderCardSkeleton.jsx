export default function PostHeaderCardSkeleton() {
  return (
    <div className="card">
      <div className="flex p-2 gap-4 justify-between items-center animate-pulse">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 skeleton" />
          <div className="h-4 w-32 skeleton" />
        </div>
        <div className="h-4 w-12 skeleton" />
      </div>
    </div>
  );
}
