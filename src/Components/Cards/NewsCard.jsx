import WhiteCard from "./WhiteCard";
import SecondTitle from "../Titles/SecondTitle";
import RoundedGrayButton from "../Buttons/RoundedGrayButton";
import { faBookmark, faComment } from "@fortawesome/free-solid-svg-icons";
import AccountImage from "../AccountImage";

export default function NewsCard({ title, image, content }) {
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
        <div className="flex gap-2">
          <RoundedGrayButton icon={faBookmark} />
          <RoundedGrayButton icon={faComment} value="Commenter" />
        </div>
      </div>
    </WhiteCard>
  );
}
