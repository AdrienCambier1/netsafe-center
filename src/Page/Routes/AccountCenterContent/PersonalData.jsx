import WhiteCard from "../../../Components/Cards/WhiteCard";
import ThirdTitle from "../../../Components/Titles/ThirdTitle";
import WhiteCardContent from "../../../Components/Titles/WhiteCardContent";

export default function PersonalData() {
  return (
    <WhiteCard>
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b border-gray-300/50">
          <ThirdTitle value="Informations personnelles" />
        </div>
        <WhiteCardContent
          description="Identifiant"
          value="xrayzun_"
        ></WhiteCardContent>
        <WhiteCardContent
          description="Adresse e-mail"
          value="bertrand06@gmail.com"
          button="Modifier l'adresse e-mail associé"
        ></WhiteCardContent>
      </div>
    </WhiteCard>
  );
}
