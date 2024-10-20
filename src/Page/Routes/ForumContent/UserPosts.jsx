import { PostHeaderCard, NewsCard } from "../../../Components/Cards";

export default function UserPosts() {
  return (
    <>
      <PostHeaderCard title="Vos posts" description="Ajoutez un post" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
    </>
  );
}
