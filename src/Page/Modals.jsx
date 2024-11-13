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
        isError={modals["logoutError"]}
        isActive={modals["logoutAlert"]}
        value="Déconnecté avec succès"
      />
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
