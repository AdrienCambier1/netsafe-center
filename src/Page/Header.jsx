import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import GrayButton from "../Components/GrayButton";
import HeaderButton from "../Components/HeaderButton";

export default function Header() {
  return (
    <header className="z-50 fixed bg-white shadow-md shadow-purple-200/50 h-16 w-full flex items-center justify-between px-6">
      <div className="flex gap-4 h-full items-center relative"></div>
      <div className="flex gap-4 h-full items-center relative">
        <HeaderButton value="test"></HeaderButton>
        <HeaderButton value="test"></HeaderButton>
        <HeaderButton value="test"></HeaderButton>
      </div>
      <div className="flex gap-4 h-full items-center relative">
        <GrayButton icon={faComment} background="true" />
        <GrayButton icon={faUser} />
      </div>
    </header>
  );
}
