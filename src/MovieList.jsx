import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-3 mb-4" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;