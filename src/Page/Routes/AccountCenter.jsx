import { Outlet } from "react-router-dom";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import {
  LightPurpleButton,
  CardButton,
  LightRedButton,
} from "../../Components/Buttons";
import {
  faLock,
  faAddressCard,
  faUser,
  faRightToBracket,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { ConnectionContext, ModalContext } from "../../Contexts";
import {
  PostHeaderCardSkeleton,
  AccountCardSkeleton,
} from "../../Components/Skeletons";
import { useNavigate } from "react-router-dom";

export default function AccountCenter() {
  const { toggleModal, setModalState } = useContext(ModalContext);
  const { auth, authFetch } = useContext(ConnectionContext);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(auth.identifiant);
    setModalState("textCopied", true);
  };

  useEffect(() => {
    if (userData.length > 0) {
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await authFetch(
          `https://netsafe-center-backend.vercel.app/users/search?query=${auth.identifiant}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          navigate("/");
          setModalState("logoutAlert", true);
          return;
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="page-content">
      <div className="border-b border-color pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <h1 className="first-title">Gestion du compte</h1>
        <CardButton
          value={`ID : ${auth.identifiant}`}
          icon={faCopy}
          onClick={handleCopy}
        />
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-4">
        <div>
          <div className="flex flex-col gap-2 sticky top-24">
            <LightPurpleButton
              icon={faUser}
              value="Aperçu du compte"
              link="/account_center/account_overview"
            />
            <LightPurpleButton
              icon={faAddressCard}
              value="Informations personnelles"
              link="/account_center/personal_data"
            />
            <LightPurpleButton
              icon={faLock}
              value="Mot de passe et sécurité"
              link="/account_center/password_and_security"
            />
            <LightPurpleButton
              icon={faPaintBrush}
              value="Apparence du site"
              link="/account_center/appearance"
            />
            <LightRedButton
              icon={faRightToBracket}
              value="Se déconnecter"
              onClick={() => toggleModal("logoutDialog")}
            />
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-4">
          {isLoading ? (
            <>
              <PostHeaderCardSkeleton />
              <AccountCardSkeleton />
              <AccountCardSkeleton />
              <AccountCardSkeleton />
            </>
          ) : (
            <Outlet context={{ userData }} />
          )}
        </div>
      </div>
    </div>
  );
}
