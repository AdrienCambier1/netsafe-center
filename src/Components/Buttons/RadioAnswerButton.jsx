import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function RadioAnswerButton({ isCorrect, isSelected }) {
  const getAnswerClass = () => {
    if (isSelected) {
      return isCorrect ? "text-teal-500" : "text-red-500";
    } else {
      return "dark:text-neutral-700 text-neutral-300";
    }
  };

  return (
    <FontAwesomeIcon
      className={`p-2.5 h-4 w-4 ${getAnswerClass()}`}
      icon={isCorrect ? faCheck : faXmark}
    />
  );
}
