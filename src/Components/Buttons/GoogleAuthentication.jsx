import GoogleLogo from "../../Images/google_logo.svg";
import { DefaultText } from "../Texts";

export default function GoogleAuthentication() {
  return (
    <a className="flex justify-center items-center gap-2 w-full h-10 border-2 dark:border-zinc-800 dark:hover:border-zinc-400 border-zinc-200 hover:border-zinc-600 dark:text-zinc-400 text-zinc-600 text-sm font-['Raleway'] font-medium rounded-xl p-2 cursor-pointer">
      <img className="h-4" src={GoogleLogo} />
      <DefaultText value="Continuer avec Google" />
    </a>
  );
}
