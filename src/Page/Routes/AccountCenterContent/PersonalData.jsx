import { CustomTitle } from "../../../Components";
import { CardContent } from "../../../Components";

export default function PersonalData() {
  return (
    <div className="card">
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b dark:border-neutral-800 border-neutral-200">
          <CustomTitle value="Informations personnelles" />
        </div>
        <CardContent description="Identifiant" value="xrayzun_" />
        <CardContent
          description="Adresse e-mail"
          value="bertrand06@gmail.com"
          button="Modifier l'adresse e-mail associé"
        />
      </div>
    </div>
  );
}
