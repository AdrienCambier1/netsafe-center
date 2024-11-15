import AccountImage from "../AccountImage";
import { HeavyPurpleButton } from "../Buttons";
import { WhiteCard } from "../Cards";

export default function ConnectedState({ value, name, link }) {
  return (
    <WhiteCard>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex items-center border-b dark:border-zinc-700 border-gray-300/50 pb-2">
          <AccountImage />
          <p className="dark:text-zinc-400 text-zinc-600 font-medium font-['Raleway'] text-sm ml-2">
            Guess
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div
            className={`${
              value
                ? `dark:bg-teal-950 bg-teal-50 dark:border-teal-900 border-teal-100 text-teal-500`
                : `dark:bg-red-950 bg-red-50 dark:border-red-900 border-red-100 text-red-500`
            } w-fit border rounded-full px-4 py-1 text-sm font-['Raleway']`}
          >
            {value ? "Connecté" : "Déconnecté"}
          </div>
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
