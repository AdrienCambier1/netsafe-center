import { FirstTitle } from "../../Components/Titles";
import { useParams, Navigate, Outlet } from "react-router-dom";
import { FeedCard, ClassCard } from "../../Components/Cards";
import ClassData from "../../Data/class.json";

export default function Class() {
  const { classId } = useParams();

  if (!classId) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="p-8 w-full max-w-[70rem]">
      <div className="border-b border-gray-300/50 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Cours en ligne" />
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-4">
        <div>
          <div className="flex flex-col gap-2 sticky top-24">
            <ClassCard
              key="test"
              title={ClassData.course.title}
              status="Complété"
            />
            <ul
              aria-label="User feed"
              role="feed"
              className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200"
            >
              {ClassData.course.sections.map((section, i) => (
                <FeedCard key={i} user={section.title} type="isActive" />
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
