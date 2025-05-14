import {
  AlertModal,
  CreatePostModal,
  DialogModal,
  LoaderModal,
  LoginModal,
  RegisterModal,
  MessageModal,
  ModifyEmailModal,
  ModifyPasswordModal,
} from "../Modals";
import { ConnectionContext, ModalContext } from "../Contexts";
import { useContext } from "react";
import { faSignOut, faUser, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Modals() {
  const {
    modals,
    toggleModal,
    setModalState,
    currentPostId,
    setCurrentPostId,
    setDeletedPostId,
  } = useContext(ModalContext);
  const { logout, authFetch } = useContext(ConnectionContext);

  const handleDeletePost = async () => {
    if (!currentPostId) return;

    setModalState("isLoading", true);

    const response = await authFetch(
      `https://netsafe-center-backend.vercel.app/posts/${currentPostId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setModalState("removePostAlert", true);
      setDeletedPostId(currentPostId);
      setCurrentPostId(null);
      setModalState("removePostDialog", false);
    } else {
      setModalState("tryDeletePostAlert", true);
    }

    setModalState("isLoading", false);
  };

  return (
    <>
      <CreatePostModal isOpen={modals["createPostModal"]} />
      <ModifyEmailModal isOpen={modals["modifyEmailModal"]} />
      <ModifyPasswordModal isOpen={modals["modifyPasswordModal"]} />
      <AlertModal
        modal="postAlert"
        isActive={modals["postAlert"]}
        value="Votre post a été ajouté"
      />
      <AlertModal
        modal="loginAlert"
        isActive={modals["loginAlert"]}
        value="Vous êtes connecté"
      />
      <AlertModal
        modal="registerAlert"
        isActive={modals["registerAlert"]}
        value="Votre compte a été créé"
      />
      <AlertModal
        modal="logoutAlert"
        isError={true}
        isActive={modals["logoutAlert"]}
        value="Vous avez été déconnecté"
      />
      <AlertModal
        modal="commentAlert"
        isActive={modals["commentAlert"]}
        value="Le commentaire a été ajouté"
      />
      <AlertModal
        modal="removePostAlert"
        isError={true}
        isActive={modals["removePostAlert"]}
        value="Votre post a été supprimé"
      />
      <DialogModal
        isOpen={modals["logoutDialog"]}
        onClose={() => toggleModal("logoutDialog")}
        onClick={() => {
          logout();
          setModalState("logoutAlert", true);
          setModalState("logoutDialog", false);
        }}
        title="Déconnexion"
        description="Etes-vous sûr de vouloir vous déconnecter ?"
        action="Se déconnecter"
        icon={faSignOut}
        customBackground="dark:bg-red-900/50 bg-red-50"
        customColor="text-red-500"
        link="/"
      />
      <DialogModal
        isOpen={modals["connectionRequirementDialog"]}
        onClose={() => toggleModal("connectionRequirementDialog")}
        onClick={() => {
          toggleModal("loginModal");
          toggleModal("connectionRequirementDialog");
        }}
        title="Connexion requise"
        description="Veuillez vous connecter pour accéder à toutes les fonctionnalités"
        action="Se connecter"
        icon={faUser}
        customBackground={`dark:bg-amber-900/50 bg-amber-50`}
        customColor="text-amber-500"
      />
      <DialogModal
        isOpen={modals["removePostDialog"]}
        onClose={() => {
          toggleModal("removePostDialog");
          setCurrentPostId(null);
        }}
        onClick={handleDeletePost}
        alertId="removePostAlert"
        title="Supprimer le post"
        description="Etes-vous sûr de vouloir supprimer ce post ?"
        action="Supprimer"
        icon={faTrash}
        customBackground={`dark:bg-red-900/50 bg-red-50`}
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
        modal="tryCreatePostAlert"
        isActive={modals["tryCreatePostAlert"]}
        value="Erreur lors de la création du post"
      />
      <MessageModal
        modal="tryDeletePostAlert"
        isActive={modals["tryDeletePostAlert"]}
        value="Erreur lors de la suppression du post"
      />
      <MessageModal
        modal="tryAddCommentAlert"
        isActive={modals["tryAddCommentAlert"]}
        value="Une erreur est survenue lors de l'ajout du commentaire"
      />
      <MessageModal
        modal="textCopied"
        isActive={modals["textCopied"]}
        value="Copié dans le presse-papiers"
      />
    </>
  );
}
