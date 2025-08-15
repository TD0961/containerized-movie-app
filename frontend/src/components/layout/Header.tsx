
export default function Header() {
  return (
    <header className="flex flex-col items-center py-8">
      {/* Logo with jagged neon effect */}
      <h1 className="text-5xl font-bold text-primary font-mono neon-text">
        CINEHACK
      </h1>
      
      {/* Search bar with pulse animation */}
      <div className="mt-6 relative w-96">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full bg-transparent border-2 border-primary rounded-full py-3 px-6 
                   text-text focus:outline-none pulse-border placeholder:text-text/70"
        />
        <div className="absolute right-4 top-3 text-primary">
          🔍
        </div>
      </div>
    </header>
  );
}