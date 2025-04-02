import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import { useContext, useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  NewsCardSkeleton,
  PostHeaderCardSkeleton,
} from "../../../Components/Skeletons";
import { ModalContext } from "../../../Contexts";

export default function MostLikedPosts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { newPost } = useContext(ModalContext);

  const filteredPosts =
    postData && postData.length > 0
      ? postData
          .filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort((a, b) => parseInt(b.likes_count) - parseInt(a.likes_count))
      : [];

  useEffect(() => {
    if (postData.length > 0) {
      return;
    }

    const fetchPostData = async () => {
      try {
        const response = await fetch(
          `https://netsafe-center-backend.vercel.app/posts`,
          {
            method: "GET",
          }
        );

        const data = await response.json();
        setPostData(data);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData();
  }, []);

  useEffect(() => {
    if (newPost) {
      setPostData((currentPosts) => [newPost, ...currentPosts]);
    }
  }, [newPost]);

  if (isLoading) {
    return (
      <>
        <PostHeaderCardSkeleton />
        <NewsCardSkeleton />
        <NewsCardSkeleton />
        <NewsCardSkeleton />
      </>
    );
  } else {
    return (
      <>
        <PostHeaderCard
          title="Posts les plus aimés"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <NewsCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              user={post.user_name}
              date={format(new Date(post.created_at), "dd/MM/yyyy", {
                locale: fr,
              })}
              like={parseInt(post.likes_count)}
            />
          ))
        ) : (
          <p className="mt-4 default-text">Aucun post trouvé</p>
        )}
      </>
    );
  }
}
