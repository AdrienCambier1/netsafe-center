import { CustomTitle } from "../../../Components";
import { CardContent } from "../../../Components";
import { useOutletContext } from "react-router-dom";

export default function PersonalData() {
  const context = useOutletContext();
  const userData = context?.userData || [];

  return (
    <div className="card">
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b border-color">
          <CustomTitle value="Informations personnelles" />
        </div>
        <CardContent
          description="Identifiant"
          value={
            userData.length > 0
              ? userData[0].identifiant
              : "Utilisateur inconnu"
          }
        />
        <CardContent
          description="Adresse e-mail"
          value={userData.length > 0 ? userData[0].mail : "Email inconnu"}
          button="Modifier le mail"
        />
      </div>
    </div>
  );
}
