import { CustomTitle } from "../../../Components";
import { CardContent } from "../../../Components";

export default function PasswordAndSecurity() {
  return (
    <div className="card">
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b border-color">
          <CustomTitle value="Mot de passe et sécurité" />
        </div>
        <CardContent
          description="Mot de passe"
          value="Sécurisez votre mot de passe en le mettant régulièrement à jour."
          button="Mettre à jour"
        />
      </div>
    </div>
  );
}
