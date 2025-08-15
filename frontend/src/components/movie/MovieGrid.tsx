import { useEffect, useState } from 'react';
import type { Movie } from '../../services/movieService';
import { fetchAllMovies, searchMovies } from '../../services/movieService';
import MovieCard from './MovieCard';

export default function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = searchQuery ? await searchMovies(searchQuery) : await fetchAllMovies();
        setMovies(data);
        setError(null);
      } catch (err) {
        setError('Failed to load movies');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[300px] h-[450px] bg-background/50 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {/* Search Input */}
      <div className="w-full max-w-md p-4">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-background/50 border border-primary rounded-full py-2 px-4 
                     text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))
        ) : (
          <div className="col-span-3 text-center text-text py-12">
            {searchQuery ? 'No matching movies found' : 'No movies available'}
          </div>
        )}
      </div>
    </div>
  );
}