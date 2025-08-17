import axios from 'axios';

export interface Movie {
  _id: string;
  title: string;
  year: string;
  rating: number;
  poster: string;
  director?: string;
  plot?: string;
}

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get('/api/movies');
    const data = response.data;
    
    if (!Array.isArray(data)) {
      return []; // Return empty array instead of throwing error
    }
    
    return data.map(movie => ({
      ...movie,
      _id: movie._id || movie.id
    }));
  } catch (error) {
    console.error('Fetch error:', error);
    return []; // Fallback to empty array
  }
};