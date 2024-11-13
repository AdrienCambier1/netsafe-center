import { WhiteCard } from "../Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WhiteButton({ value, icon, onClick }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <WhiteCard>
        <div className="flex gap-4 justify-between items-center text-zinc-600 text-sm font-['Raleway'] group-hover:text-purple-500">
          <p>{value}</p>
          <FontAwesomeIcon icon={icon} />
        </div>
      </WhiteCard>
    </div>
  );
}
