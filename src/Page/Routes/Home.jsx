import Button1 from "../../Components/Button1";
import Button2 from "../../Components/Button2";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="h-20 w-full grid grid-cols-3">
      <div className="relative flex flex-col gap-2 p-4 border-r border-gray-300/50">
        <Button2 icon={faHouse} value="Accueil" link="/"></Button2>
        <Button2 icon={faBook} value="Vos cours" link="/"></Button2>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
