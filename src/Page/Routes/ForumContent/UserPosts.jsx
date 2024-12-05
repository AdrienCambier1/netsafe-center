import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import Data from "../../../Data/data.json";

export default function UserPosts() {
  return (
    <>
      <PostHeaderCard title="Vos posts" />
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
            canModify={true}
          />
        ))}
    </>
  );
}
