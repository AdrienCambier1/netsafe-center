import { WhiteCard } from "../Cards";
import { ThirdTitle } from "../Titles";
import { SearchInput } from "../Inputs";
import { HeavyPurpleButton } from "../Buttons";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { DarkText } from "../Texts";

export default function PostHeaderCard({ title, description, onClick }) {
  return (
    <WhiteCard>
      <div className={`${title && "p-2"} flex flex-col gap-4`}>
        {title && (
          <div className="py-2 border-b dark:border-neutral-800 border-neutral-200">
            <ThirdTitle value={title} />
          </div>
        )}
        <div className="flex gap-4 justify-between items-center">
          {description ? (
            <DarkText value={description} />
          ) : (
            <SearchInput placeholder="Rechercher un post" icon={faSearch} />
          )}
          <HeavyPurpleButton icon={faPlus} onClick={onClick} />
        </div>
      </div>
    </WhiteCard>
  );
}
