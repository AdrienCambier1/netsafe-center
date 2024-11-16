import AccountImage from "../AccountImage";
import { HeavyPurpleButton } from "../Buttons";
import { WhiteCard } from "../Cards";
import { DefaultText, DarkText } from "../Texts";
import { Status } from "../Tags";

export default function ConnectedState({ value, name, link }) {
  return (
    <WhiteCard>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2 border-b dark:border-zinc-800 border-gray-300/50 pb-2">
          <AccountImage />
          <DefaultText value="Guess" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          {value ? (
            <Status isOk={true} value="Connecté" />
          ) : (
            <Status isOk={false} value="Déconnecté" />
          )}
          <div className="text-center">
            {value ? (
              <DarkText value={`Bonjour ${name}, ravie de vous revoir`} />
            ) : (
              <DarkText value="Veuillez vous connecter afin d'effectuer les cours" />
            )}
          </div>
        </div>
        <HeavyPurpleButton
          value={value ? "Mon profil" : "Se connecter"}
          link={link}
        />
      </div>
    </WhiteCard>
  );
}
