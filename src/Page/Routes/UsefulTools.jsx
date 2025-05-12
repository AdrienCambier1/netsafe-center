import { ToolsCard } from "../../Components/Cards";

export default function UsefulTools() {
  return (
    <div className="page-content">
      <h1>Outils pratiques</h1>
      <div className="pt-4 flex flex-col gap-4">
        <h4>
          Retrouvez une liste d'outils gratuits pour vous protéger numériquement
        </h4>
        <div className="flex flex-col md:grid grid-cols-3 gap-4">
          <ToolsCard
            brand="Avast"
            title="Générateur de mots de passe aléatoires"
            link="https://www.avast.com/fr-fr/random-password-generator"
          />
          <ToolsCard
            brand="Kaspersky"
            title="Testeur et générateur de mots de passe"
            link="https://password.kaspersky.com/fr/"
          />
          <ToolsCard
            brand="Mailinblack"
            title="Générateur de mots de passe sécurisé"
            link="https://www.mailinblack.com/generateur-de-mots-de-passe/"
          />
          <ToolsCard
            brand="F-Secure"
            title="Vérificateur de fuite de données personnelles"
            link="https://www.f-secure.com/fr/identity-theft-checker"
          />
          <ToolsCard
            brand="NordPass"
            title="Vérificateur de la force des mots de passe"
            link="https://nordpass.com/fr/secure-password/"
          />
          <ToolsCard
            brand="Sitechecker"
            title="Analyse de sécurité de site web"
            link="https://sitechecker.pro/fr/website-safety/"
          />
          <ToolsCard
            brand="BotGuard"
            title="Scanner de sécurité de site web"
            link="https://botguard.net/fr/tools/scan"
          />
          <ToolsCard
            brand="NordVPN"
            title="Analyse de liens suspects"
            link="https://nordvpn.com/fr/link-checker/"
          />
          <ToolsCard
            brand="F-Secure"
            title="Vérificateur de liens sûrs"
            link="https://www.f-secure.com/fr/link-checker"
          />
        </div>
      </div>
    </div>
  );
}
