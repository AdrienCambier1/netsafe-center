import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import { useState, useContext } from "react";
import Data from "../../../Data/data.json";
import { SearchContext, ModalContext } from "../../../Contexts";
import { DefaultText } from "../../../Components/Texts";

export default function MostLikedPosts() {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const filteredPosts = Data.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => b.like - a.like);

  return (
    <>
      <PostHeaderCard
        title="Posts les plus aimés"
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
            comments={post.comments}
          />
        ))
      ) : (
        <DefaultText value="Aucun post trouvé" />
      )}
    </>
  );
}
