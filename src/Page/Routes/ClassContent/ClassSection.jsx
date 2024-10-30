import { WhiteCard } from "../../../Components/Cards";
import {
  SecondTitle,
  ThirdTitle,
  FourthTitle,
} from "../../../Components/Titles";
import ClassData from "../../../Data/class.json";
import { HighlightCard } from "../../../Components/Cards";
import { LightPurpleButton } from "../../../Components/Buttons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

export default function ClassSection() {
  const { sectionId } = useParams();
  const sectionIndex = parseInt(sectionId) - 1;

  const section = ClassData.course.sections[sectionIndex];

  return (
    <>
      <WhiteCard>
        <div className="p-2 flex flex-col gap-8">
          <SecondTitle value={section.title} />
          {section.lessons.map((lesson, index) => {
            return (
              <>
                <div className="flex flex-col gap-4">
                  <ThirdTitle value={lesson.title} />
                  <p className="text-sm font-['Raleway'] font-medium text-zinc-600">
                    {lesson.content.introduction}
                  </p>
                </div>
                <HighlightCard
                  data={lesson.content.objectives}
                  type="objectives"
                />
                {lesson.content.mainContent.map((content, index) => {
                  return (
                    <div className="flex flex-col gap-4">
                      <FourthTitle value={content.heading} />
                      <p className="text-sm font-['Raleway'] font-medium text-zinc-600">
                        {content.text}
                      </p>
                    </div>
                  );
                })}
                <HighlightCard data={lesson.content.tips} type="tips" />
              </>
            );
          })}
        </div>
      </WhiteCard>
      {ClassData.course.sections[sectionIndex - 1] ? (
        <div className="flex gap-4">
          <LightPurpleButton
            value="Leçon précédente"
            icon={faArrowLeft}
            link={`/class/1/section/${sectionIndex}`}
          />
          <LightPurpleButton
            value="Leçon suivante"
            icon={faArrowRight}
            isOnRight={true}
            link={
              ClassData.course.sections[sectionIndex + 1]
                ? `/class/1/section/${sectionIndex + 2}`
                : "/classes_list"
            }
          />
        </div>
      ) : (
        <LightPurpleButton
          value="Leçon suivante"
          icon={faArrowRight}
          link={
            ClassData.course.sections[sectionIndex + 1]
              ? `/class/1/section/${sectionIndex + 2}`
              : "/classes_list"
          }
        />
      )}
    </>
  );
}
