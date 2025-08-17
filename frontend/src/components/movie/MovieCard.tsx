import { useState } from 'react';
import type { Movie } from '../../services/movieService';

export default function MovieCard({ movie }: { movie: Movie }) {
  const [imgSrc, setImgSrc] = useState(movie.poster);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-[300px] h-[450px] rounded-lg overflow-hidden shadow-lg bg-gray-800">
      {/* Poster Image Container */}
      <div className="relative w-full h-[80%]">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
        )}
        <img
          src={imgSrc}
          alt={`${movie.title} poster`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => {
            console.warn(`Failed to load poster: ${movie.poster}`);
            setImgSrc('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="360" viewBox="0 0 300 360" fill="%232d3748"><rect width="300" height="360"/><text x="150" y="180" font-family="sans-serif" font-size="16" fill="white" text-anchor="middle">Poster Not Available</text></svg>');
          }}
        />
      </div>
      
      {/* Movie Info */}
      <div className="p-4 h-[20%] flex flex-col justify-between">
        <h3 className="text-white font-bold truncate">{movie.title}</h3>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{movie.year}</span>
          <span className="text-yellow-400">{movie.rating}/10</span>
        </div>
      </div>
    </div>
  );
}