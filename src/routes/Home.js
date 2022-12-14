import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=6&sort_by=like_count");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <h3>
      <div>
        {loading ? (
          <div className={styles.loader}>Loading...</div>
        ) : (
          <div>
            <h1 className = {styles.title}>Most Liked Movies Of All Time</h1>
          <div className={styles.container}>
            <div className={styles.movies}>
              {movies.map((movie) => (
                <Movie
                  coverIMG={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                  id={movie.id}
                  year={movie.year}
                />
              ))}
            </div>
          </div>
          </div>
        )}
      </div>
    </h3>
  );
}

export default Home;
