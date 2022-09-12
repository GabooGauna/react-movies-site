import movies from "../data/movies.json";
import { MoviesCard } from "./MoviesCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  return (
    <div>
      <ul className={styles.movieGrid}>
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
