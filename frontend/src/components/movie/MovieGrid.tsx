import { useEffect, useState } from "react";
import type { Movie } from "../../services/movieService";
import { fetchMovies, searchMovies } from "../../services/movieService";
import MovieCard from "./MovieCard";
import Header from "../layout/Header";

export default function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load all movies (Case 1)
  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  // Handle search (Case 2 & 3)
  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const data = await searchMovies(query);
      if (data.length > 0) {
        setMovies(data);
        setError(null);
      } else {
        setMovies([]);
        setError(`No results for "${query}"`);
      }
    } catch {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white">Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-primary rounded"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <Header onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mt-8">
        {movies.map((movie) => (
          <MovieCard key={movie._id || movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
