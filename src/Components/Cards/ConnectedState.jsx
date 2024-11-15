import AccountImage from "../AccountImage";
import { HeavyPurpleButton } from "../Buttons";
import { WhiteCard } from "../Cards";
import { DefaultText } from "../Titles";
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
          <p className="text-center dark:text-zinc-600 text-zinc-400 text-sm font-['Raleway']">
            {value
              ? `Bonjour ${name}, ravie de vous revoir`
              : "Veuillez vous connecter afin d'effectuer les cours"}
          </p>
        </div>
        <HeavyPurpleButton
          value={value ? "Mon profil" : "Se connecter"}
          link={link}
        />
      </div>
    </WhiteCard>
  );
}
