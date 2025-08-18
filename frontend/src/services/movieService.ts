import axios from "axios";

export interface Movie {
  _id: string;
  title: string;
  year: string;
  rating: number;
  poster: string;
  director?: string;
  plot?: string;
  id?: string;
}

// Case 1: Fetch all movies
export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get("/api/movies");
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

// Case 2 & 3: Search movies by title
export const searchMovies = async (title: string): Promise<Movie[]> => {
  try {
    const response = await axios.get(`/api/movies/search?title=${encodeURIComponent(title)}`);
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
};
