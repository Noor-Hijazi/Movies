const MovieCard = ({ movie }) => {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
  
    return (
      <div className="card bg-secondary text-white">
        <img src={IMG_URL + movie.poster_path} alt={movie.title} className="card-img-top" />
        <div className="card-body text-center">
    
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    );
  };
  
  export default MovieCard;