import { WhiteCard } from "../../../Components/Cards";
import { AccountImage } from "../../../Components";
import { DefaultText } from "../../../Components/Texts";
import { TextPurpleButton } from "../../../Components/Buttons";

export default function ProfilPicture() {
  return (
    <WhiteCard>
      <div className="p-2 flex justify-between items-center">
        <div className="w-1/2 pr-2 flex gap-2 items-center">
          <AccountImage />
          <DefaultText value="xrayzun_" />
        </div>
        <div className="w-1/2 pl-2 text-right">
          <TextPurpleButton value="Modifier la photo" />
        </div>
      </div>
    </WhiteCard>
  );
}
