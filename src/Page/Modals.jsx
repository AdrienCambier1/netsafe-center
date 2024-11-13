import { AlertModal } from "../Modals";
import { ModalContext } from "../Contexts";
import { useContext } from "react";

export default function Modals() {
  const { modal, toggleModal, setModalState } = useContext(ModalContext);

  return (
    <AlertModal
      isError={false}
      isActive={true}
      value="Carte ajoutée avec succès"
    />
  );
}
