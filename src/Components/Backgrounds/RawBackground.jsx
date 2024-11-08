export default function RawBackground({ children }) {
  return (
    <div className="flex items-center justify-center bg-gradient-to-bl from-purple-50 to-yellow-50 fixed h-screen w-screen z-40 top-0 left-0 px-8">
      {children}
    </div>
  );
}
