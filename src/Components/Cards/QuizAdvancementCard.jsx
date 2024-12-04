import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { DefaultText, SmallerDarkText, ColoredText } from "../Texts";
import { Status } from "../Tags";

export default function QuizAdvancementCard({
  title,
  level,
  difficulty,
  status,
}) {
  return (
    <div className="dark:bg-neutral-950 border dark:border-zinc-800 border-transparent bg-white rounded-xl p-2 dark:shadow-none shadow-md shadow-gray-200/50">
      <div className="flex-col h-full flex md:flex-col items-center justify-between gap-4 p-2">
        <div className="flex md:flex-col w-full gap-4">
          <div className="dark:bg-yellow-950 bg-yellow-50 rounded-full flex items-center justify-center p-4 w-fit">
            <FontAwesomeIcon
              className=" p-4 h-4 w-4 text-yellow-500"
              icon={faLightbulb}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <ColoredText
              value={`Niveau ${level} | ${difficulty}`}
              color="yellow-500"
            />
            <DefaultText value={title} />
          </div>
        </div>
        <div className="items-center w-full md:w-full flex flex-col gap-4">
          {status ? (
            <>
              <div className="border-t dark:border-zinc-800 border-zinc-200 pt-2 w-full text-center">
                <SmallerDarkText value="Vous avez déjà terminé ce quizz" />
              </div>
              <Status isOk={true} value="Complété" />
            </>
          ) : (
            <>
              <div className="border-t dark:border-zinc-800 border-zinc-200 pt-2 w-full text-center">
                <SmallerDarkText value="Vous n'avez pas encore terminé le quizz" />
              </div>
              <Status isOk={false} value="En cours" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
