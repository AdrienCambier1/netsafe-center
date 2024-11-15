import { WhiteCard } from "../../../Components/Cards";
import { AccountImage } from "../../../Components";

export default function ProfilPicture() {
  return (
    <WhiteCard>
      <div className="p-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <AccountImage />
          <p className="text-sm font-['Raleway'] font-medium dark:text-zinc-200 text-zinc-800">
            xrayzun_
          </p>
        </div>
        <div>
          <a class="break-words font-['Raleway'] text-sm text-purple-500 font-semibold hover:opacity-75 cursor-pointer">
            Modifier la photo
          </a>
        </div>
      </div>
    </WhiteCard>
  );
}
