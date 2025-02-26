import {
  faBookmark,
  faCaretLeft,
  faPenNib,
  faArrowLeft,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  ConnectedState,
  NewsCard,
  PostHeaderCard,
} from "../../Components/Cards";
import { LightPurpleButton, HeavyPurpleButton } from "../../Components/Buttons";
import Data from "../../Data/data.json";
import { faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const asideElement = () => {
    return (
      <>
        <ConnectedState link="/account_center/account_overview" />
        <div className="flex flex-col gap-2">
          <h4 className="fourth-title">Nos réseaux</h4>
          <LightPurpleButton icon={faTiktok} value="Tiktok" />
          <LightPurpleButton icon={faYoutube} value="Youtube" />
        </div>
        <HeavyPurpleButton
          icon={faArrowLeft}
          value="Voir plus de posts"
          link="/forum/recent_posts"
        />
      </>
    );
  };

  return (
    <>
      <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
        <div className="col-span-1 p-8">
          <div className="flex flex-col gap-8 sticky top-24">
            <div className="flex flex-col gap-2">
              <LightPurpleButton
                icon={faBookmark}
                value="Posts enregistrés"
                link="/forum/saved_posts"
                connectionRequired={true}
              />
              <LightPurpleButton
                icon={faFileAlt}
                value="Vos posts"
                link="/forum/user_posts"
                connectionRequired={true}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="fourth-title">Vos avancées</h4>
              <LightPurpleButton
                icon={faCaretLeft}
                value="Les quiz"
                link="/quiz_list"
                connectionRequired={true}
              />
              <LightPurpleButton
                icon={faCaretLeft}
                value="Les cours"
                link="classes_list"
                connectionRequired={true}
              />
            </div>
            <HeavyPurpleButton
              icon={faPenNib}
              value="Testez vos connaissances"
              link="quiz_list"
              connectionRequired={true}
            />
            <div className="hidden md:flex lg:hidden flex-col gap-8">
              <div className="border-t border-color" />
              {asideElement()}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 relative flex flex-col gap-4 p-8 md:border-l border-t md:border-t-0 border-color">
          <PostHeaderCard description="Ajoutez un post" />
          {Data.sort((a, b) => b.date - a.date)
            .slice(0, 4)
            .map((post) => (
              <NewsCard
                key={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
                user={post.user}
                date={post.date}
                like={post.like}
                comments={post.comments}
              />
            ))}
        </div>
        <div className="block md:hidden lg:block col-span-1 p-8 lg:border-l border-t md:border-t-0 border-color">
          <div className="flex flex-col gap-8 sticky top-24">
            {asideElement()}
          </div>
        </div>
      </div>
    </>
  );
}
