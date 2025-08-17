import { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/movieService';
import MovieCard from './MovieCard';
import type { Movie } from '../../services/movieService';

export default function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to load movies';
        setError(message);
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadMovies();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-white">Loading movies...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-8 max-w-md">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary rounded text-white hover:bg-primary-dark transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Success state
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-primary">CINEMACH</h1>
      </div>
      
      {movies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-white mb-4">No movies found in database</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary rounded text-white hover:bg-primary-dark transition"
          >
            Refresh
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 justify-items-center">
          {movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}