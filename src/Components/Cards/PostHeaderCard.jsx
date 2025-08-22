import { CustomTitle, AccountImage } from "../../Components";
import { SearchInput } from "../Inputs";
import { IconPurpleButton } from "../Buttons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ModalContext } from "../../Contexts";

export default function PostHeaderCard({
  title,
  description,
  searchTerm,
  setSearchTerm,
}) {
  const { toggleModal } = useContext(ModalContext);

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
              <p className="dark-text">{description}</p>
              <IconPurpleButton
                icon={faPlus}
                onClick={() => toggleModal("createPostModal")}
                connectionRequired={true}
              />
            </>
          ) : (
            <SearchInput
              placeholder="Rechercher un post"
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
