import { Outlet } from "react-router-dom";
import { LightPurpleButton } from "../../Components/Buttons";
import {
  faBookmark,
  faClock,
  faThumbsUp,
  faFileAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ModalContext, ConnectionContext } from "../../Contexts";

export default function Forum() {
  const { toggleModal } = useContext(ModalContext);
  const { connection } = useContext(ConnectionContext);

  return (
    <div className="page-content">
      <h1 className="first-title border-b border-color pb-4">
        Forum d'entraide
      </h1>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-4">
        <div>
          <div className="flex flex-col gap-2 sticky top-24">
            <LightPurpleButton
              value="Posts récents"
              icon={faClock}
              link="/forum/recent_posts"
            />
            <LightPurpleButton
              value="Posts les plus aimés"
              icon={faThumbsUp}
              link="/forum/most_liked_posts"
            />
            {connection === true ? (
              <>
                <LightPurpleButton
                  value="Posts enregistrés"
                  icon={faBookmark}
                  link="/forum/saved_posts"
                />
                <LightPurpleButton
                  value="Vos posts"
                  icon={faFileAlt}
                  link="/forum/user_posts"
                />
              </>
            ) : (
              <LightPurpleButton
                value="Se connecter"
                icon={faArrowLeft}
                onClick={() => toggleModal("loginModal")}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
