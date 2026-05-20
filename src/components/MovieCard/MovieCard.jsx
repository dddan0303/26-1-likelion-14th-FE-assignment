function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <article className="movie-card">
      <div className="movie-content">
        <div className="movie-top">
          <h2>{movie.title}</h2>

          <span className="rating">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>

        <p className="description">
          {movie.overview}
        </p>

        <div className="movie-bottom">
          <span>개봉 : {movie.release_date}</span>

          <button>Wish</button>
        </div>
      </div>

      <img
        className="poster-box"
        src={imageUrl}
        alt={movie.title}
      />
    </article>
  );
}

export default MovieCard;