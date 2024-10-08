import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Button1 from "../Components/Button1";
import Button2 from "../Components/Button2";
import Button3 from "../Components/Button3";

export default function Header() {
  return (
    <header className="fixed bg-white shadow-md shadow-purple-200/50 h-16 w-full flex items-center justify-between px-6">
      <div className="flex gap-4 h-full items-center relative"></div>
      <div className="flex gap-4 h-full items-center relative">
        <Button3 value="test"></Button3>
        <Button3 value="test"></Button3>
        <Button3 value="test"></Button3>
      </div>
      <div className="flex gap-4 h-full items-center relative">
        <Button1 icon={faComment} background="true" />
        <Button1 icon={faUser} />
      </div>
    </header>
  );
}
