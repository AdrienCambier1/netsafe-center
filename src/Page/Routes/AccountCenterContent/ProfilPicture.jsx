import { AccountImage } from "../../../Components";

export default function ProfilPicture() {
  return (
    <div className="card">
      <div className="p-2 flex justify-between items-center">
        <div className="w-1/2 pr-2 flex gap-2 items-center">
          <AccountImage />
          <p className="default-text">xrayzun_</p>
        </div>
        <div className="w-1/2 pl-2 text-right">
          <p className="text-purple-btn">Modifier la photo</p>
        </div>
      </div>
    </div>
  );
}
