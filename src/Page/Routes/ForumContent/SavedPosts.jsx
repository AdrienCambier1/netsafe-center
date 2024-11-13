import { PostHeaderCard, NewsCard } from "../../../Components/Cards";
import { useState, useContext } from "react";
import { ModalContext } from "../../../Contexts";

export default function SavedPosts() {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const [openComments, setOpenComments] = useState(false);

  return (
    <>
      <PostHeaderCard
        title="Posts enregistrés"
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
