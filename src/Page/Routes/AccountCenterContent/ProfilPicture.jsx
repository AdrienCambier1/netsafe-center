import { WhiteCard } from "../../../Components/Cards";
import { AccountImage } from "../../../Components";
import { DefaultText } from "../../../Components/Texts";
import { TextPurpleButton } from "../../../Components/Buttons";

export default function ProfilPicture() {
  return (
    <WhiteCard>
      <div className="p-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <AccountImage />
          <DefaultText value="xrayzun_" />
        </div>
        <div>
          <TextPurpleButton value="Modifier la photo" />
        </div>
      </div>
    </WhiteCard>
  );
}
