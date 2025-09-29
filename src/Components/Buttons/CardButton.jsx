import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardButton({ value, icon, onClick }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="card">
        <div className={`flex gap-4 justify-between items-center`}>
          <p className="default-text group-hover:text-purple-500">{value}</p>
          <FontAwesomeIcon
            icon={icon}
            className="group-hover:text-purple-500 text-neutral-600 dark:text-neutral-400"
          />
        </div>
      </div>
    </div>
  );
}
