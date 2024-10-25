import { FirstTitle } from "../../Components/Titles";
import { useParams, Navigate } from "react-router-dom";

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
      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-4"></div>
    </div>
  );
}
