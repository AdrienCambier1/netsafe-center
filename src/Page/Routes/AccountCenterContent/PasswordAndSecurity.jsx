import { WhiteCard } from "../../../Components/Cards";
import { ThirdTitle } from "../../../Components/Titles";
import { WhiteCardContent } from "../../../Components";

export default function PasswordAndSecurity() {
  return (
    <WhiteCard>
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b dark:border-zinc-700 border-gray-300/50">
          <ThirdTitle value="Mot de passe et sécurité" />
        </div>
        <WhiteCardContent
          description="Mot de passe"
          value="Ceci est un mdp"
          button="Mettre à jour"
        />
      </div>
    </WhiteCard>
  );
}
