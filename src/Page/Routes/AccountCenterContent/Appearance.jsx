import { WhiteCard } from "../../../Components/Cards";
import { ThirdTitle } from "../../../Components/Titles";
import { WhiteCardContent } from "../../../Components";
import DarkPreview from "../../../Images/dark-preview.svg";
import LightPreview from "../../../Images/light-preview.svg";
import { ThemeButton } from "../../../Components/Buttons";
import { ThemeContext } from "../../../Contexts/ThemeContext";
import { useContext } from "react";

export default function Appearance() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <WhiteCard>
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b dark:border-neutral-800 border-neutral-200">
          <ThirdTitle value="Apparence du site" />
        </div>
        <WhiteCardContent
          description="Thème"
          value="Choisissez le thème de couleur pour votre confort visuel"
        />
        <div className="flex gap-4">
          <ThemeButton
            img={DarkPreview}
            value="Sombre"
            selected={theme === "dark"}
            onClick={() => setTheme("dark")}
          />
          <ThemeButton
            img={LightPreview}
            value="Clair"
            selected={theme === "light"}
            onClick={() => setTheme("light")}
          />
        </div>
      </div>
    </WhiteCard>
  );
}
