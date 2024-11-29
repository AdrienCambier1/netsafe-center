import { WhiteCard } from "../Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultText } from "../Texts";

export default function WhiteButton({ value, icon, onClick }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <WhiteCard>
        <div className={`flex gap-4 justify-between items-center`}>
          <DefaultText value={value} custom="group-hover:text-purple-500" />
          <FontAwesomeIcon
            icon={icon}
            className="group-hover:text-purple-500 text-zinc-600 dark:text-zinc-400"
          />
        </div>
      </WhiteCard>
    </div>
  );
}
