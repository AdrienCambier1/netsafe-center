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
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  NewsCardSkeleton,
  PostHeaderCardSkeleton,
} from "../../Components/Skeletons";
import { ModalContext } from "../../Contexts";

export default function Home() {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { newPost } = useContext(ModalContext);

  useEffect(() => {
    if (postData.length > 0) {
      return;
    }

    const fetchPostData = async () => {
      const response = await fetch(
        `https://netsafe-center-backend.vercel.app/posts?limit=5`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPostData(data);
      }

      setIsLoading(false);
    };

    fetchPostData();
  }, []);

  useEffect(() => {
    if (newPost) {
      setPostData((currentPosts) => [newPost, ...currentPosts]);
    }
  }, [newPost]);

  const asideElement = () => {
    return (
      <>
        <ConnectedState link="/account_center/account_overview" />
        <div className="flex flex-col gap-2">
          <h4>Nos réseaux</h4>
          <LightPurpleButton
            link="https://www.tiktok.com/@netsafecenter"
            icon={faTiktok}
            value="Tiktok"
          />
          <LightPurpleButton icon={faInstagram} value="Instagram" />
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
        <div className="col-span-1 p-6">
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
              <h4>Vos avancées</h4>
              <LightPurpleButton
                icon={faCaretLeft}
                value="Les quiz"
                link="/quiz_list"
                connectionRequired={true}
              />
              <LightPurpleButton
                icon={faCaretLeft}
                value="Les cours"
                link="/classes_list"
                connectionRequired={true}
              />
            </div>
            <HeavyPurpleButton
              icon={faPenNib}
              value="Testez vos connaissances"
              link="/quiz/1"
              connectionRequired={true}
            />
            <div className="hidden md:flex lg:hidden flex-col gap-8">
              <div className="border-t border-color" />
              {asideElement()}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 relative flex flex-col gap-4 p-6 md:border-l border-t md:border-t-0 border-color">
          {isLoading ? (
            <>
              <PostHeaderCardSkeleton />
              <NewsCardSkeleton />
              <NewsCardSkeleton />
              <NewsCardSkeleton />
            </>
          ) : (
            <>
              <PostHeaderCard description="Ajoutez un post" />
              {postData.length > 0 ? (
                postData.map((post) => (
                  <NewsCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    user={post.user.identifiant}
                    date={format(new Date(post.created_at), "dd/MM/yyyy", {
                      locale: fr,
                    })}
                    like={parseInt(post.likes_count)}
                  />
                ))
              ) : (
                <p className="mt-4 default-text">Aucun post trouvé</p>
              )}
            </>
          )}
        </div>
        <div className="block md:hidden lg:block col-span-1 p-6 lg:border-l border-t md:border-t-0 border-color">
          <div className="flex flex-col gap-8 sticky top-24">
            {asideElement()}
          </div>
        </div>
      </div>
    </>
  );
}
