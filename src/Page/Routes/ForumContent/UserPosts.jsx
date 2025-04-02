import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import { useContext, useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  NewsCardSkeleton,
  PostHeaderCardSkeleton,
} from "../../../Components/Skeletons";
import { ConnectionContext, ModalContext } from "../../../Contexts";
import { useNavigate } from "react-router-dom";

export default function UserPosts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { deletedPostId, newPost, setModalState } = useContext(ModalContext);
  const { auth, logout, authFetch } = useContext(ConnectionContext);
  const navigate = useNavigate();

  const filteredPosts =
    postData && postData.length > 0
      ? postData.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  useEffect(() => {
    if (deletedPostId) {
      setPostData((currentPosts) =>
        currentPosts.filter((post) => post.id !== deletedPostId)
      );
    }
  }, [deletedPostId]);

  useEffect(() => {
    if (postData.length > 0) {
      return;
    }

    const fetchPostData = async () => {
      try {
        const response = await authFetch(
          `https://netsafe-center-backend.vercel.app/posts`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          navigate("/");
          setModalState("logoutAlert", true);
          logout();
          return;
        }

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
          title="Vos posts"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {filteredPosts.length > 0 ? (
          filteredPosts
            .sort((a, b) => b.date - a.date)
            .map((post) => (
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
                canModify={true}
              />
            ))
        ) : (
          <p className="mt-4 default-text">Aucun post trouvé</p>
        )}
      </>
    );
  }
}
