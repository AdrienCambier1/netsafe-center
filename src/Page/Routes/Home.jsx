import {
  faBookmark,
  faCaretLeft,
  faBook,
  faPenNib,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  ConnectedState,
  NewsCard,
  PostHeaderCard,
} from "../../Components/Cards";
import { FourthTitle } from "../../Components/Titles";
import { LightPurpleButton, HeavyPurpleButton } from "../../Components/Buttons";
import CreatePostModal from "../../Modals/CreatePostModal";
import { useContext, useState } from "react";
import Data from "../../Data/data.json";
import { faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import AlertModal from "../../Modals/AlertModal";
import {
  CreatePostContext,
  PostErrorContext,
} from "../../Contexts/CreatePostContext";

export default function Home() {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const toggleCreatePostModal = () => {
    setIsCreatePostModalOpen(!isCreatePostModalOpen);
  };

  const [OpenComments, setOpenComments] = useState(false);
  const { createPost, setCreatePost } = useContext(CreatePostContext);
  const { postError, setPostError } = useContext(PostErrorContext);

  const toggleOpenComments = (id) => {
    setOpenComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const asideElement = () => {
    return (
      <>
        <ConnectedState value={true} link="/account_center/account_overview" />
        <div className="flex flex-col gap-2">
          <FourthTitle value="Nos réseaux" />
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
      <div className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
        <div className="col-span-1 p-8">
          <div className="flex flex-col gap-8 sticky top-24">
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
            <HeavyPurpleButton
              icon={faPenNib}
              value="Testez vos connaissances"
              link="quiz_list"
            />
            <div className="hidden sm:flex lg:hidden flex-col gap-8">
              <div className="border-t gray-300/50" />
              {asideElement()}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 relative flex flex-col gap-4 p-8 sm:border-l border-t border-gray-300/50">
          <PostHeaderCard
            description="Ajoutez un post"
            onClick={toggleCreatePostModal}
          />
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
                isCommentOpen={OpenComments[post.id]}
                openComment={() => toggleOpenComments(post.id)}
                comments={post.comments}
              />
            ))}
        </div>
        <div className="block sm:hidden lg:block col-span-1 p-8 lg:border-l border-t sm:border-t-0 border-gray-300/50">
          <div className="flex flex-col gap-8 sticky top-24">
            {asideElement()}
          </div>
        </div>
      </div>
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={toggleCreatePostModal}
      />
      <AlertModal
        isError={postError}
        isActive={createPost}
        value="Carte ajoutée avec succès"
      />
    </>
  );
}
