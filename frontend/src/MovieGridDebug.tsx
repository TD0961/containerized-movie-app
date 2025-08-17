import { useEffect, useState } from 'react';

interface SimpleMovie {
  _id: string;
  title: string;
}

export default function MovieGridDebug() {
  const [movies, setMovies] = useState<SimpleMovie[]>([]);

  useEffect(() => {
    // Temporary test data - no API call
    setMovies([
      { _id: '1', title: 'Test Movie 1' },
      { _id: '2', title: 'Test Movie 2' }
    ]);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-white mb-4">Debug Output:</h2>
      {movies.map(movie => (
        <div key={movie._id} className="text-white">
          {movie.title}
        </div>
      ))}
    </div>
  );
}