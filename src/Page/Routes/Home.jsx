import {
  faBookmark,
  faCaretLeft,
  faBook,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import {
  ConnectedState,
  NewsCard,
  PostHeaderCard,
} from "../../Components/Cards";
import { FourthTitle } from "../../Components/Titles";
import { LightPurpleButton, HeavyPurpleButton } from "../../Components/Buttons";

export default function Home() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 sm:grid-rows-2 lg:grid-rows-1 relative">
      <div className="col-span-1 relative top-0 flex flex-col gap-8 p-8 lg:border-r border-gray-300/50">
        <div className="flex flex-col gap-2">
          <LightPurpleButton
            icon={faBookmark}
            value="Posts enregistrés"
            link="/forum/saved_posts"
          />
          <LightPurpleButton icon={faBook} value="Vos cours" />
        </div>
        <div className="flex flex-col gap-2">
          <FourthTitle value="Cours actuels" />
          <LightPurpleButton icon={faCaretLeft} value="Accueil" />
          <LightPurpleButton icon={faCaretLeft} value="Vos cours" />
        </div>
        <HeavyPurpleButton icon={faPenNib} value="Testez vos connaissances" />
      </div>

      <div className="lg:col-span-2 relative flex flex-col gap-4 p-8 sm:border-l lg:border-none border-gray-300/50 row-span-1 sm:row-span-2 lg:row-span-1">
        <PostHeaderCard title="Posts récents" description="Ajoutez un post" />
        <NewsCard
          title="Poste 1"
          content="Bonjour, j'aime les enfants"
          like="10"
        />
        <NewsCard
          title="Poste 1"
          content="Bonjour, j'aime les enfants"
          like="10"
        />
        <NewsCard
          title="Poste 1"
          content="Bonjour, j'aime les enfants"
          like="10"
        />
      </div>
      <div className="col-span-1 relative flex flex-col gap-4 p-8 lg:border-l border-gray-300/50">
        <ConnectedState value={true} link="/account-center" />
      </div>
    </div>
  );
}
