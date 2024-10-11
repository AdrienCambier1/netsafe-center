import GuessAccountImage from "./GuessAccountImage";
import HeavyPurpleButton from "./HeavyPurpleButton";
import WhiteCard from "./WhiteCard";

export default function ConnectedState({ value, name }) {
  return (
    <WhiteCard>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex items-center border-b border-gray-300/50 pb-2">
          <GuessAccountImage></GuessAccountImage>
          <p className="text-zinc-600 font-medium font-['Raleway'] text-sm ml-2">
            Guess
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div
            className={`${
              value
                ? `bg-teal-50 border-teal-100 text-teal-500`
                : `bg-red-50 border-red-100 text-red-500`
            } w-fit border rounded-full px-4 py-1 text-sm font-['Raleway']`}
          >
            {value ? "Connecté" : "Déconnecté"}
          </div>
          <p className="text-center text-zinc-400 text-sm font-['Raleway']">
            {value
              ? `Bonjour ${name}, ravie de vous revoir`
              : "Veuillez vous connecter afin d'effectuer les cours"}
          </p>
        </div>
        <HeavyPurpleButton
          value={value ? "Mon profil" : "Se connecter"}
        ></HeavyPurpleButton>
      </div>
    </WhiteCard>
  );
}
