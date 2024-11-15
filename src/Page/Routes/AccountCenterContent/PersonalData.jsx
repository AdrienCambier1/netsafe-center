import { WhiteCard } from "../../../Components/Cards";
import { ThirdTitle } from "../../../Components/Titles";
import { WhiteCardContent } from "../../../Components";

export default function PersonalData() {
  return (
    <WhiteCard>
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b dark:border-zinc-700 border-gray-300/50">
          <ThirdTitle value="Informations personnelles" />
        </div>
        <WhiteCardContent description="Identifiant" value="xrayzun_" />
        <WhiteCardContent
          description="Adresse e-mail"
          value="bertrand06@gmail.com"
          button="Modifier l'adresse e-mail associé"
        />
      </div>
    </WhiteCard>
  );
}
