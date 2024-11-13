import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import { CreatePostModal } from "../../../Modals";
import { useState, useContext } from "react";
import Data from "../../../Data/data.json";
import { SearchContext } from "../../../Contexts/SearchContext";

export default function MostLikedPosts() {
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

  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const filteredPosts = Data.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => b.like - a.like);

  return (
    <>
      <PostHeaderCard
        title="Posts les plus aimés"
        onClick={toggleCreatePostModal}
      />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
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
        ))
      ) : (
        <p className="text-zinc-600 text-sm font-['Raleway'] font-medium">
          Aucun post trouvé
        </p>
      )}
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={toggleCreatePostModal}
      />
    </>
  );
}
