import FirstTitle from "../../Components/Titles/FirstTitle";
import WhiteCard from "../../Components/Cards/WhiteCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import LightPurpleButton from "../../Components/Buttons/LightPurpleButton";
import {
  faLock,
  faPencil,
  faAddressCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AccountOverview from "./AccountCenterContent/AccountOverview";
import PersonalData from "./AccountCenterContent/PersonalData";
import PasswordAndSecurity from "./AccountCenterContent/PasswordAndSecurity";
import UserPosts from "./AccountCenterContent/UserPosts";
import { useState } from "react";
import WhiteButton from "../../Components/Buttons/WhiteButton";

export default function AccountCenter() {
  const [activeSection, setActiveSection] = useState("overview");

  function renderActiveSection() {
    switch (activeSection) {
      case "account_overview":
        return <AccountOverview />;
      case "personal_data":
        return <PersonalData />;
      case "password_and_security":
        return <PasswordAndSecurity />;
      case "user_posts":
        return <UserPosts />;
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
      <div className="flex flex-col md:grid grid-cols-3 gap-4 h-10 pt-4">
        <div className="flex flex-col gap-2">
          <LightPurpleButton
            icon={faUser}
            value="Aperçu du compte"
            onClick={() => setActiveSection("account_overview")}
          ></LightPurpleButton>
          <LightPurpleButton
            icon={faAddressCard}
            value="Informations personnelles"
            onClick={() => setActiveSection("personal_data")}
          ></LightPurpleButton>
          <LightPurpleButton
            icon={faLock}
            value="Mot de passe et sécurité"
            onClick={() => setActiveSection("password_and_security")}
          ></LightPurpleButton>
          <LightPurpleButton
            icon={faPencil}
            value="Vos posts"
            onClick={() => setActiveSection("user_posts")}
          ></LightPurpleButton>
        </div>
        <div className="account-data flex flex-col col-span-2 gap-4 pb-4">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
}
