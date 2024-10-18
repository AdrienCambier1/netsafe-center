import { useParams } from "react-router-dom";
import { FirstTitle } from "../../Components/Titles";
import { LightPurpleButton } from "../../Components/Buttons";
import {
  faBookmark,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { RecentPosts, MostLikedPosts, SavedPosts } from "./ForumContent";
import { useState, useEffect } from "react";

export default function Forum() {
  const { section } = useParams();

  const [activeSection, setActiveSection] = useState("recent_posts");

  useEffect(() => {
    if (
      section === "saved_posts" ||
      section === "most_liked_posts" ||
      section === "recent_posts"
    ) {
      setActiveSection(section);
    }
  }, [section]);

  function renderActiveSection() {
    switch (activeSection) {
      case "recent_posts":
        return <RecentPosts />;
      case "most_liked_posts":
        return <MostLikedPosts />;
      case "saved_posts":
        return <SavedPosts />;
      default:
        return <RecentPosts />;
    }
  }

  return (
    <div className="relative p-8 max-w-[70rem] left-1/2 -translate-x-1/2">
      <div className="border-b border-gray-300/50 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Forum d'entraide" />
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-4">
        <div className="flex flex-col gap-2">
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
          <LightPurpleButton
            value="Posts enregistrés"
            icon={faBookmark}
            link="/forum/saved_posts"
          />
        </div>
        <div className="account-data flex flex-col col-span-2 gap-4">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
}
