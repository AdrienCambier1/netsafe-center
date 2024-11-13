import { AlertModal, CreatePostModal } from "../Modals";
import { ModalContext } from "../Contexts";
import { useContext } from "react";

export default function Modals() {
  const { modal, toggleModal, setModalState } = useContext(ModalContext);

  return (
    <>
      {/* <CreatePostModal isOpen={false} onClose={false} />
      <AlertModal
        isError={false}
        isActive={false}
        value="Carte ajoutée avec succès"
      /> */}
    </>
  );
}
