// src/components/movie/MovieCard.tsx
import type { Movie } from '../../services/movieService';

export default function MovieCard({ movie }: { movie: Movie }) {
  const getPosterUrl = () => {
    if (movie.poster && (movie.poster.startsWith('http') || movie.poster.startsWith('/'))) {
      return movie.poster;
    }
    return '/posters/placeholder.jpg';
  };

  return (
    <div className="group relative w-[300px] h-[450px] perspective-1000 transition-all duration-300 hover:scale-105">
      <img
        src={getPosterUrl()}
        alt={movie.title}
        className="w-full h-full object-cover rounded-lg shadow-lg saturate-120 contrast-110"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/posters/placeholder.jpg';
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-primary neon-text">{movie.title}</h3>
        <p className="text-text">{movie.year}</p>
        
        {movie.director && (
          <p className="text-text/80 text-sm mt-2">
            Directed by <span className="text-secondary">{movie.director}</span>
          </p>
        )}
        
        <div className="mt-4 w-full bg-background/80 h-1.5 rounded-full">
          <div 
            className="h-full bg-primary rounded-full" 
            style={{ width: `${(movie.rating || 0) * 10}%` }}
          />
        </div>
        <p className="text-xs text-primary font-mono mt-1">
          {(movie.rating || 0).toFixed(1)}/10
        </p>
      </div>
    </div>
  );
}