import { useState } from "react";
import type { Movie } from "../../services/movieService";

export default function MovieCard({ movie }: { movie: Movie }) {
  const [imgError, setImgError] = useState(false);

  const hasValidPoster =
    movie.poster &&
    movie.poster !== "N/A" &&
    movie.poster.startsWith("http");

  return (
    <div className="w-[300px] h-[450px] rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:scale-105 transition-transform duration-300">
      {/* Poster or fallback */}
      <div className="relative w-full h-[80%] bg-gray-700 flex items-center justify-center">
        {hasValidPoster && !imgError ? (
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="p-4 text-center">
            <h3 className="text-white text-xl font-bold break-words">
              {movie.title}
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              {movie.year} • {movie.rating}/10
            </p>
          </div>
        )}
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
