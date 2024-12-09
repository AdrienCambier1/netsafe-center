import { WhiteCard } from "../Cards";
import { ThirdTitle } from "../Titles";
import { SearchInput } from "../Inputs";
import { IconPurpleButton, GrayButton } from "../Buttons";
import {
  faNewspaper,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { DarkText } from "../Texts";
import { useContext } from "react";
import { ConnectionContext, ModalContext } from "../../Contexts";

export default function PostHeaderCard({ title, description }) {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);
  const { connection } = useContext(ConnectionContext);

  return (
    <WhiteCard>
      <div className={`${title && "p-2"} flex flex-col gap-4`}>
        {title && (
          <div className="py-2 border-b dark:border-neutral-800 border-neutral-200">
            <ThirdTitle value={title} />
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
                <DarkText value={description} />
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
            />
          )}
        </div>
      </div>
    </WhiteCard>
  );
}
