import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import { CreatePostModal } from "../../../Modals";
import { useState } from "react";

export default function UserPosts() {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const toggleCreatePostModal = () => {
    setIsCreatePostModalOpen(!isCreatePostModalOpen);
  };

  return (
    <>
      <PostHeaderCard
        title="Vos posts"
        description="Ajoutez un post"
        onClick={toggleCreatePostModal}
      />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={toggleCreatePostModal}
      />
    </>
  );
}
