import AccountImage from "../AccountImage";
import { HeavyPurpleButton } from "../Buttons";
import { Status } from "../";
import { ConnectionContext, ModalContext } from "../../Contexts";
import { useContext } from "react";

export default function ConnectedState({ name }) {
  const { isAuthenticated } = useContext(ConnectionContext);
  const { toggleModal } = useContext(ModalContext);

  return (
    <div className="card">
      <div className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2 border-b border-color pb-2">
          <AccountImage />
          <p className="default-text">Guess</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          {isAuthenticated === true ? (
            <Status isOk={true} value="Connecté" />
          ) : (
            <Status isOk={false} value="Déconnecté" />
          )}
          <div className="text-center">
            {isAuthenticated === true ? (
              <p className="dark-text">Bonjour toi, ravie de vous revoir</p>
            ) : (
              <p className="dark-text">
                Veuillez vous connecter afin d'avoir accès à toutes les
                fonctionnalités
              </p>
            )}
          </div>
        </div>
        {isAuthenticated === true ? (
          <HeavyPurpleButton
            value="Mon profil"
            link="/account_center/account_overview"
          />
        ) : (
          <HeavyPurpleButton
            value="Se connecter"
            onClick={() => toggleModal("loginModal")}
          />
        )}
      </div>
    </div>
  );
}
