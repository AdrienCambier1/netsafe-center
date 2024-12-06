import AccountImage from "../AccountImage";
import { HeavyPurpleButton } from "../Buttons";
import { WhiteCard } from "../Cards";
import { DefaultText, DarkText } from "../Texts";
import { Status } from "../Tags";
import { ConnectionContext, ModalContext } from "../../Contexts";
import { useContext } from "react";

export default function ConnectedState({ name }) {
  const { connection } = useContext(ConnectionContext);
  const { toggleModal } = useContext(ModalContext);

  return (
    <WhiteCard>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2 border-b dark:border-neutral-800 border-neutral-200 pb-2">
          <AccountImage />
          <DefaultText value="Guess" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          {connection === true ? (
            <Status isOk={true} value="Connecté" />
          ) : (
            <Status isOk={false} value="Déconnecté" />
          )}
          <div className="text-center">
            {connection === true ? (
              <DarkText value={`Bonjour ${name}, ravie de vous revoir`} />
            ) : (
              <DarkText value="Veuillez vous connecter afin d'avoir accès à toutes les fonctionnalités" />
            )}
          </div>
        </div>
        {connection === true ? (
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
    </WhiteCard>
  );
}
