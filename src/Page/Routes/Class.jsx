import { useParams, Navigate, Outlet } from "react-router-dom";
import { FeedCard, ClassAdvancementCard } from "../../Components/Cards";
import ClassData from "../../Data/class.json";

export default function Class() {
  const { classId } = useParams();

  if (!classId) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="page-content">
      <h1 className="first-title border-b border-color pb-4">Cours en ligne</h1>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-4">
        <div>
          <div className="flex flex-col gap-2 sticky top-24">
            <ClassAdvancementCard
              key="test"
              title={ClassData.course.title}
              status={true}
            />
            <ul
              aria-label="User feed"
              role="feed"
              className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed dark:before:border-slate-700 before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border dark:after:border-slate-700 after:border-slate-200"
            >
              {ClassData.course.sections.map((section, i) => (
                <FeedCard key={i} title={section.title} type="isActive" />
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
