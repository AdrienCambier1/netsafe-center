import { AlertModal, CreatePostModal, DialogModal } from "../Modals";
import { ModalContext } from "../Contexts";
import { useContext } from "react";

export default function Modals() {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);

  return (
    <>
      <CreatePostModal isOpen={modals["CreatePostModal"]} />
      <AlertModal
        isError={modals["postError"]}
        isActive={modals["postAlert"]}
        value="Poste ajoutée avec succès"
      />
      <AlertModal
        isActive={modals["textCopied"]}
        value="Copié dans le presse-papiers"
      />
      <AlertModal
        isError={modals["logoutError"]}
        isActive={modals["logoutAlert"]}
        value="Déconnecté avec succès"
      />
      <AlertModal
        isError={modals["commentError"]}
        isActive={modals["commentAlert"]}
        value="Commentaire ajouté"
      />
      <AlertModal isError={false} isActive={true} value="test" />
      <DialogModal
        isOpen={modals["logoutDialog"]}
        onClose={() => toggleModal("logoutDialog")}
        alertId="logoutAlert"
        title="Déconnexion"
        description="Etes-vous sûr de vouloir vous déconnecter ?"
        action="Se déconnecter"
      />
    </>
  );
}
