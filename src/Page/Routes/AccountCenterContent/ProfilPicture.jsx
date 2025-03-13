import { AccountImage } from "../../../Components";
import { useOutletContext } from "react-router-dom";

export default function ProfilPicture() {
  const context = useOutletContext();
  const userData = context?.userData || [];

  return (
    <div className="card">
      <div className="p-2 flex justify-between items-center">
        <div className="w-1/2 pr-2 flex gap-2 items-center">
          <AccountImage />
          <p className="default-text">
            {userData.length > 0
              ? userData[0].identifiant
              : "Utilisateur inconnu"}
          </p>
        </div>
        <div className="w-1/2 pl-2 text-right">
          <p className="text-purple-btn">Modifier la photo</p>
        </div>
      </div>
    </div>
  );
}
