export default function AccountCardSkeleton() {
  return (
    <div className="card">
      <div className="p-2 flex flex-col gap-4 animate-pulse">
        <div className="py-2 border-b border-color">
          <div className="h-4 w-44 skeleton" />
        </div>
        <div className="flex flex-col py-2 gap-2 items-start">
          <div className="h-4 w-16 skeleton" />
          <div className="flex justify-between items-center w-full gap-2">
            <div className="h-4 w-32 skeleton" />
            <div className="h-4 w-12 skeleton" />
          </div>
        </div>
        <div className="flex flex-col py-2 gap-2 items-start">
          <div className="h-4 w-16 skeleton" />
          <div className="flex justify-between items-center w-full gap-2">
            <div className="h-4 w-32 skeleton" />
            <div className="h-4 w-12 skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
}
