import { CustomTitle, CardContent } from "../../../Components";
import { useContext } from "react";
import { ModalContext } from "../../../Contexts";

export default function PasswordAndSecurity() {
  const { toggleModal } = useContext(ModalContext);

  return (
    <div className="card">
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b border-color">
          <CustomTitle value="Mot de passe et sécurité" />
        </div>
        <CardContent
          description="Mot de passe"
          value="Sécurisez votre mot de passe en le mettant régulièrement à jour."
          button="Mettre à jour"
          onClick={() => {
            toggleModal("modifyPasswordModal");
          }}
        />
      </div>
    </div>
  );
}
