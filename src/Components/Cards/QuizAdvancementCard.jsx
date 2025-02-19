import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Status } from "../Tags";

export default function QuizAdvancementCard({
  title,
  level,
  difficulty,
  status,
}) {
  return (
    <div className="dark:bg-neutral-950 border dark:border-neutral-800 border-transparent bg-white rounded-xl p-2 dark:shadow-none shadow-md shadow-gray-200/50">
      <div className="flex-col h-full flex md:flex-col items-center justify-between gap-4 p-2">
        <div className="flex md:flex-col w-full gap-4">
          <div className="dark:bg-yellow-950 bg-yellow-50 rounded-full flex items-center justify-center p-4 w-fit">
            <FontAwesomeIcon
              className=" p-4 h-4 w-4 text-yellow-500"
              icon={faLightbulb}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="font-['Raleway'] text-sm font-bold text-yellow-500">
              Niveau ${level} | ${difficulty}
            </p>
            <p className="default-text">{title}</p>
          </div>
        </div>
        <div className="items-center w-full md:w-full flex flex-col gap-4">
          {status ? (
            <>
              <div className="border-t dark:border-neutral-800 border-neutral-200 pt-2 w-full text-center">
                <p className="smaller-dark-text">
                  Vous avez déjà terminé ce quizz
                </p>
              </div>
              <Status isOk={true} value="Complété" />
            </>
          ) : (
            <>
              <div className="border-t dark:border-neutral-800 border-neutral-200 pt-2 w-full text-center">
                <p className="smaller-dark-text">
                  Vous n'avez pas encore terminé le quizz
                </p>
              </div>
              <Status isOk={false} value="En cours" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
