// src/services/movieService.ts
import axios from 'axios';

export interface Movie {
  _id: string;
  title: string;
  year: string;
  rating: number;
  poster: string;
  plot?: string;
  director?: string;
}

export const fetchAllMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get('/api/movies');
    // Ensure response is always an array
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return []; // Return empty array on error
  }
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axios.get(`/api/movies/search?title=${encodeURIComponent(query)}`);
    // Normalize response to array
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};