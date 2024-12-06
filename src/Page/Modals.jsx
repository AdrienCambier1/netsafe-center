import {
  AlertModal,
  CreatePostModal,
  DialogModal,
  LoginModal,
  RegisterModal,
} from "../Modals";
import { ModalContext } from "../Contexts";
import { useContext } from "react";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

export default function Modals() {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);

  return (
    <>
      <CreatePostModal isOpen={modals["createPostModal"]} />
      <AlertModal
        modal="postAlert"
        isError={modals["postError"]}
        isActive={modals["postAlert"]}
        value="Poste ajoutée avec succès"
      />
      <AlertModal
        modal="textCopied"
        isActive={modals["textCopied"]}
        value="Copié dans le presse-papiers"
      />
      <AlertModal
        modal="logoutAlert"
        isError={modals["logoutError"]}
        isActive={modals["logoutAlert"]}
        value="Déconnecté avec succès"
      />
      <AlertModal
        modal="commentAlert"
        isError={modals["commentError"]}
        isActive={modals["commentAlert"]}
        value="Commentaire ajouté"
      />
      <DialogModal
        isOpen={modals["logoutDialog"]}
        onClose={() => toggleModal("logoutDialog")}
        alertId="logoutAlert"
        title="Déconnexion"
        description="Etes-vous sûr de vouloir vous déconnecter ?"
        action="Se déconnecter"
        icon={faSignOut}
        customBackground="dark:bg-red-950 bg-red-50"
        customColor="text-red-500"
      />
      <LoginModal
        isOpen={modals["loginModal"]}
        onClose={() => toggleModal("loginModal")}
      />
      <RegisterModal
        isOpen={modals["registerModal"]}
        onClose={() => toggleModal("registerModal")}
      />
    </>
  );
}
