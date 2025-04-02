export default function CommentCardSkeleton() {
  return (
    <div className="flex gap-4 animate-pulse">
      <div className="flex flex-col">
        <div>
          <div className="h-10 w-10 skeleton" />
        </div>
        <div className="pt-2 h-full gap-1 w-full flex flex-col items-center">
          <div className="w-[1px] h-full dark:bg-neutral-800 bg-neutral-200" />
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-4">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-12 skeleton" />
          <div className="h-4 w-44 skeleton" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <div className="h-4 w-16 skeleton" />
          <div className="h-4 w-8 skeleton" />
        </div>
      </div>
    </div>
  );
}
