import WhiteCard from "../../../Components/Cards/WhiteCard";
import AccountImage from "../../../Components/AccountImage";

export default function ProfilPicture() {
  return (
    <WhiteCard>
      <div className="p-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <AccountImage />
          <p className="text-sm font-['Raleway'] font-medium text-zinc-800">
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
