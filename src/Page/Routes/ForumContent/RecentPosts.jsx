import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import { useContext } from "react";
import Data from "../../../Data/data.json";
import { SearchContext } from "../../../Contexts";

export default function RecentPosts() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const filteredPosts = Data.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <PostHeaderCard title="Posts récents" />
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
        <p className="mt-4 default-text">Aucun post trouvé</p>
      )}
    </>
  );
}
