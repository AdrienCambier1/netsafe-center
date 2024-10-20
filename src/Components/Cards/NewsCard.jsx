import { WhiteCard } from "../Cards";
import { SecondTitle } from "../Titles";
import { GrayButton, RoundedGrayButton } from "../Buttons";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import AccountImage from "../AccountImage";

export default function NewsCard({ title, image, content, like }) {
  return (
    <WhiteCard>
      <div className="flex flex-col p-2 gap-4">
        <SecondTitle value={title} />
        <div className="flex items-center">
          <AccountImage image={image} />
          <p className="text-zinc-600 font-medium font-['Raleway'] text-sm ml-2">
            Guess
          </p>
        </div>
        <div className="font-medium font-['Raleway'] text-sm text-zinc-600">
          {content}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <RoundedGrayButton icon={faBookmark} />
            <RoundedGrayButton icon={faComment} value="Répondre" />
          </div>
          <div className="flex items-center">
            <GrayButton icon={faHeart} />
            <p className="text-zinc-600 font-['Raleway'] text-sm">{like}</p>
          </div>
        </div>
      </div>
    </WhiteCard>
  );
}
