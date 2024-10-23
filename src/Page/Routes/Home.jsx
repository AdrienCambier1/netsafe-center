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
import CreatePostModal from "../../Modals/CreatePostModal";
import { useState } from "react";
import Data from "../../Data/data.json";

export default function Home() {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const toggleCreatePostModal = () => {
    setIsCreatePostModalOpen(!isCreatePostModalOpen);
  };

  const [OpenComments, setOpenComments] = useState(false);

  const toggleOpenComments = (id) => {
    setOpenComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
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

      <div className="lg:col-span-2 relative flex flex-col gap-4 p-8 sm:border-l lg:border-none border-gray-300/50">
        <PostHeaderCard
          title="Posts récents"
          description="Ajoutez un post"
          onClick={toggleCreatePostModal}
        />
        {Data.sort((a, b) => b.date - a.date).map((post) => (
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
      <div className="hidden lg:flex col-span-1 relative flex-col gap-4 p-8 lg:border-l border-gray-300/50">
        <ConnectedState value={true} link="/account-center" />
      </div>
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={toggleCreatePostModal}
      />
    </div>
  );
}
