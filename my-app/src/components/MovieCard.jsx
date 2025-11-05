const MovieCard = ({
  //accessing movie properties directly via destructuring
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card">
    {/* Conditional rendering for poster image */}
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            {/* Formatting vote average to one decimal place */}
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>
          <span>&#8226;</span>
          <p className="lang">{original_language}</p>
          <span>&#8226;</span>
          {/* Extracting year from release date */}
          <p className="year">{release_date ? release_date.split('-')[0] : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
