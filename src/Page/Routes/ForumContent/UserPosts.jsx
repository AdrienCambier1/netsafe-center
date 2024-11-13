import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import { useState, useContext } from "react";
import { ModalContext } from "../../../Contexts";

export default function UserPosts() {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const [openComments, setOpenComments] = useState(false);

  return (
    <>
      <PostHeaderCard
        title="Vos posts"
        description="Ajoutez un post"
        onClick={() => toggleModal("CreatePostModal")}
      />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
      <NewsCard value="test" title="test" like="10" />
    </>
  );
}
