import styles from "./App.module.css";
import { MoviesGrid } from "./components/MoviesGrid";

function App() {
  return (
    <div className={styles.bg}>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

export default App;
