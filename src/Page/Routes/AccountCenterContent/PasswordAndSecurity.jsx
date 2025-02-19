import { CustomTitle } from "../../../Components";
import { CardContent } from "../../../Components";

export default function PasswordAndSecurity() {
  return (
    <div className="card">
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b dark:border-neutral-800 border-neutral-200">
          <CustomTitle value="Mot de passe et sécurité" />
        </div>
        <CardContent
          description="Mot de passe"
          value="Ceci est un mdp"
          button="Mettre à jour"
        />
      </div>
    </div>
  );
}
