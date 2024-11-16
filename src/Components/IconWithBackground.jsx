import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconWithBackground({
  icon,
  customBackground,
  customColor,
}) {
  return (
    <div
      className={`${customBackground} rounded-full h-8 w-8 flex items-center justify-center`}
    >
      <FontAwesomeIcon icon={icon} className={`h-4 w-4 ${customColor}`} />
    </div>
  );
}
