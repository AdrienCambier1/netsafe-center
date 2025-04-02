export default function NewsCardSkeleton() {
  return (
    <div className="card">
      <div className="flex flex-col p-2 gap-4 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 skeleton" />
            <div className="flex gap-2 items-center ml-2">
              <div className="h-4 w-12 skeleton" />
              <div className="h-4 w-16 skeleton" />
            </div>
          </div>
        </div>
        <div className="h-4 w-32 skeleton" />
        <div className="h-4 w-44 skeleton" />
        <div className="flex justify-between items-start lg:items-center">
          <div className="h-4 w-12 skeleton" />
          <div className="h-4 w-12 skeleton" />
        </div>
      </div>
    </div>
  );
}
