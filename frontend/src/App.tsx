// src/App.tsx
import Header from './components/layout/Header';
import MovieGrid from './components/movie/MovieGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MovieGrid />
    </div>
  );
}