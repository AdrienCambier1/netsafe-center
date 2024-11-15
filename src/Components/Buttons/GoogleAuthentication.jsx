import GoogleLogo from "../../Images/google_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GoogleAuthentication() {
  return (
    <a className="flex justify-center items-center gap-2 w-full border-2 dark:border-zinc-700 dark:hover:border-zinc-400 border-zinc-300 hover:border-zinc-600 dark:text-zinc-400 text-zinc-600 text-sm font-['Raleway'] font-medium rounded-xl p-2 cursor-pointer transition-all ease-out">
      <img className="h-4" src={GoogleLogo} />
      <span>Continuer avec google</span>
    </a>
  );
}
