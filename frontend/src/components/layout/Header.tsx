import { useState } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <header className="flex flex-col items-center py-8">
      {/* Logo */}
      <h1 className="text-5xl font-bold text-primary font-mono neon-text">
        CINEHACK
      </h1>
      
      {/* Search bar */}
      <div className="mt-6 relative w-96">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search movies..."
          className="w-full bg-transparent border-2 border-primary rounded-full py-3 px-6 
                     text-text focus:outline-none pulse-border placeholder:text-text/70"
        />
        <div 
          className="absolute right-4 top-3 text-primary cursor-pointer"
          onClick={handleSearch}
        >
          🔍
        </div>
      </div>
    </header>
  );
}
