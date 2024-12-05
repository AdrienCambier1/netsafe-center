import { PostHeaderCard, NewsCard } from "../../../Components/Cards";

export default function SavedPosts() {
  return (
    <>
      <PostHeaderCard title="Posts enregistrés" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
    </>
  );
}
