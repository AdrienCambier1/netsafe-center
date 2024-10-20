export default function PurpleGradientBackground({ children }) {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-50 to-purple-100 fixed h-screen w-screen z-40 top-0 left-0 p-8">
      {children}
    </div>
  );
}
