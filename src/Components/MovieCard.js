import "./MovieCard.css";
const MovieCard = ({
  title,
  poster_path,
  vote_average,
}) => {
  let color;
  if (vote_average < 5) color = "salmon";
  else if (vote_average < 7.5) color = "orange";
  else color = "lightgreen";
  return (
    <div className="MovieCard">
      <div className="MovieCard__container">
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
        <div className="MovieCard__info">
          <p className="MovieCard__info__title">{title}</p>
          <p
            className="MovieCard__info__rating"
            style={{
              backgroundColor: `${color}`,
              borderRadius: "3px",
              padding: "0 7px",
              color: "black",
            }}
          >
            {vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
