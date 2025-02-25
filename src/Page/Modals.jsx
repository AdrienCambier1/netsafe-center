import {
  AlertModal,
  CreatePostModal,
  DialogModal,
  LoaderModal,
  LoginModal,
  RegisterModal,
  MessageModal,
} from "../Modals";
import { ConnectionContext, ModalContext } from "../Contexts";
import { useContext } from "react";
import { faSignOut, faUser, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Modals() {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const { setConnection } = useContext(ConnectionContext);

  return (
    <>
      <CreatePostModal isOpen={modals["createPostModal"]} />
      <AlertModal
        modal="postAlert"
        isError={modals["postError"]}
        isActive={modals["postAlert"]}
        value="Post ajouté avec succès"
      />
      <AlertModal
        modal="loginAlert"
        isActive={modals["loginAlert"]}
        value="Connecté avec succès"
      />
      <AlertModal
        modal="registerAlert"
        isActive={modals["registerAlert"]}
        value="Compte créé avec succès"
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
        value="Commentaire ajouté avec succès"
      />
      <AlertModal
        modal="removePostAlert"
        isError={modals["removePostError"]}
        isActive={modals["removePostAlert"]}
        value="Post supprimé avec succès"
      />
      <DialogModal
        isOpen={modals["logoutDialog"]}
        onClose={() => toggleModal("logoutDialog")}
        onClick={() => setConnection(false)}
        alertId="logoutAlert"
        title="Déconnexion"
        description="Etes-vous sûr de vouloir vous déconnecter ?"
        action="Se déconnecter"
        icon={faSignOut}
        customBackground="dark:bg-red-950 bg-red-50"
        customColor="text-red-500"
        link="/"
      />
      <DialogModal
        isOpen={modals["connectionRequirementDialog"]}
        onClose={() => toggleModal("connectionRequirementDialog")}
        onClick={() => toggleModal("loginModal")}
        title="Connexion requise"
        description="Veuillez vous connecter pour accéder à toutes les fonctionnalités"
        action="Se connecter"
        icon={faUser}
        customBackground={`dark:bg-amber-950 bg-amber-50`}
        customColor="text-amber-500"
      />
      <DialogModal
        isOpen={modals["removePostDialog"]}
        onClose={() => toggleModal("removePostDialog")}
        alertId="removePostAlert"
        title="Supprimer le post"
        description="Etes-vous sûr de vouloir supprimer ce post ?"
        action="Supprimer"
        icon={faTrash}
        customBackground={`dark:bg-red-950 bg-red-50`}
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
      <LoaderModal isLoading={modals["isLoading"]} />
      <MessageModal
        modal="tryLoginAlert"
        isActive={modals["tryLoginAlert"]}
        value="Email ou mot de passe incorrect"
      />
      <MessageModal
        modal="tryRegisterAlert"
        isActive={modals["tryRegisterAlert"]}
        value="Erreur lors de l'inscription"
      />
      <MessageModal
        modal="textCopied"
        isActive={modals["textCopied"]}
        value="Copié dans le presse-papiers"
      />
    </>
  );
}
