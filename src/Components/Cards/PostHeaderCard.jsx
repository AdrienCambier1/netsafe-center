import { CustomTitle } from "../../Components";
import { SearchInput } from "../Inputs";
import { IconPurpleButton, GrayButton } from "../Buttons";
import {
  faNewspaper,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ModalContext } from "../../Contexts";

export default function PostHeaderCard({
  title,
  description,
  searchTerm,
  setSearchTerm,
}) {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);

  return (
    <div className="card ">
      <div className="p-2 flex flex-col gap-4">
        {title && (
          <div className="py-2 border-b border-color">
            <CustomTitle value={title} />
          </div>
        )}
        <div className="flex gap-4 justify-between items-center">
          {description ? (
            <>
              <div className="flex gap-4 items-center">
                <GrayButton
                  icon={faNewspaper}
                  background={true}
                  link="/forum/user_posts"
                  connectionRequired={true}
                />
                <p className="dark-text">{description}</p>
              </div>
              <IconPurpleButton
                icon={faPlus}
                onClick={() => toggleModal("createPostModal")}
                connectionRequired={true}
              />
            </>
          ) : (
            <SearchInput
              placeholder="Rechercher un post"
              icon={faSearch}
              onClick={() => toggleModal("createPostModal")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
