import { useContext } from "react";
import { ThemeContext } from "../../Contexts";

export default function RawBackground({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-black"
          : "bg-gradient-to-bl from-purple-50 to-yellow-50 "
      } flex items-center justify-center fixed h-screen w-screen z-50 top-0 left-0 px-8`}
    >
      {children}
    </div>
  );
}
