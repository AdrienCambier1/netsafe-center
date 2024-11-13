import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import { useState, useContext } from "react";
import Data from "../../../Data/data.json";
import { SearchContext, ModalContext } from "../../../Contexts";

export default function RecentPosts() {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [openComments, setOpenComments] = useState(false);

  const toggleOpenComments = (id) => {
    setOpenComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredPosts = Data.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <PostHeaderCard
        title="Posts récents"
        onClick={() => toggleModal("CreatePostModal")}
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
            isCommentOpen={openComments[post.id]}
            openComment={() => toggleOpenComments(post.id)}
            comments={post.comments}
          />
        ))
      ) : (
        <p className="text-zinc-600 text-sm font-['Raleway'] font-medium">
          Aucun post trouvé
        </p>
      )}
    </>
  );
}
