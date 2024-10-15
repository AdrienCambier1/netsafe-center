import GoogleLogo from "../../Images/google_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GoogleAuthentication() {
  return (
    <a className="flex justify-center items-center gap-2 w-full border-2 border-zinc-300 hover:border-zinc-600 text-zinc-600 text-sm font-['Raleway'] font-medium rounded-xl p-2 transition-all ease-out">
      <img className="h-4" src={GoogleLogo} />
      <span>Continuer avec google</span>
    </a>
  );
}
