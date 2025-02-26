import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AccountImage({ image }) {
  return (
    <>
      {image ? (
        <img
          className="rounded-xl h-10 w-10 object-cover"
          src={image}
          alt="Account"
        />
      ) : (
        <div className="bg-teal rounded-xl flex items-center justify-center h-10 w-10">
          <FontAwesomeIcon className="h-4 w-4" icon={faUser} />
        </div>
      )}
    </>
  );
}
