import { useParams } from "react-router-dom";
import { FirstTitle } from "../../Components/Titles";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import {
  LightPurpleButton,
  LightRedButton,
  WhiteButton,
} from "../../Components/Buttons";
import {
  faLock,
  faAddressCard,
  faUser,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  AccountOverview,
  PersonalData,
  PasswordAndSecurity,
} from "./AccountCenterContent";
import { useState, useEffect } from "react";

export default function AccountCenter() {
  const { section } = useParams();

  const [activeSection, setActiveSection] = useState("account_overview");

  useEffect(() => {
    if (
      section === "account_overview" ||
      section === "personal_data" ||
      section === "password_and_security"
    ) {
      setActiveSection(section);
    }
  }, [section]);

  const [OpenDialog, setOpenDialog] = useState(false);

  const toggleOpenDialog = () => {
    setOpenDialog(!OpenDialog);
  };

  function renderActiveSection() {
    switch (activeSection) {
      case "account_overview":
        return <AccountOverview />;
      case "personal_data":
        return <PersonalData />;
      case "password_and_security":
        return <PasswordAndSecurity />;
      default:
        return <AccountOverview />;
    }
  }

  return (
    <div className="relative p-8 max-w-[70rem] left-1/2 -translate-x-1/2">
      <div className="border-b border-gray-300/50 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Gestion du compte" />
        <WhiteButton value="ID : 704838134" icon={faCopy} />
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-4">
        <div className="flex flex-col gap-2">
          <LightPurpleButton
            icon={faUser}
            value="Aperçu du compte"
            link="/account-center/account_overview"
          />
          <LightPurpleButton
            icon={faAddressCard}
            value="Informations personnelles"
            link="/account-center/personal_data"
          />
          <LightPurpleButton
            icon={faLock}
            value="Mot de passe et sécurité"
            link="/account-center/password_and_security"
          />
          <LightRedButton
            icon={faRightToBracket}
            value="Se déconnecter"
            onClick={toggleOpenDialog}
          />
        </div>
        <div className="account-data flex flex-col col-span-2 gap-4">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
}
