import WhiteCard from "../../../Components/Cards/WhiteCard";
import ThirdTitle from "../../../Components/Titles/ThirdTitle";
import WhiteCardContent from "../../../Components/Titles/WhiteCardContent";

export default function PasswordAndSecurity() {
  return (
    <WhiteCard>
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b border-gray-300/50">
          <ThirdTitle value="Mot de passe et sécurité" />
        </div>
        <WhiteCardContent
          description="Mot de passe"
          value="Ceci est un mdp"
          button="Mettre à jour"
        ></WhiteCardContent>
      </div>
    </WhiteCard>
  );
}
