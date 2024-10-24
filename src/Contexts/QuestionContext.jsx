import { createContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [whichQuestion, setWhichQuestion] = useState(1);

  return (
    <QuestionContext.Provider value={{ whichQuestion, setWhichQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};
