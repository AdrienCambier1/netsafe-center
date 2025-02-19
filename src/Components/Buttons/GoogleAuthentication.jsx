import GoogleLogo from "../../Images/google_logo.svg";

export default function GoogleAuthentication() {
  return (
    <a className="transition flex justify-center items-center gap-2 w-full h-10 border-2 dark:border-neutral-800 dark:hover:border-neutral-400 border-neutral-200 hover:border-neutral-600 dark:text-neutral-400 text-neutral-600 text-sm font-['Raleway'] font-medium rounded-xl p-2 cursor-pointer">
      <img className="h-4" src={GoogleLogo} />
      <p className="default-text">Continuer avec Google</p>
    </a>
  );
}
