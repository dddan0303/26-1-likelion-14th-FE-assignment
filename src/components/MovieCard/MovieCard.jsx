import WishButton from "../common/WishButton";

function MovieCard() {
  return (
    <div>
      <div>Movie Poster</div>
      <h3>Movie Title</h3>
      <p>Rating</p>
      <p>Description</p>
      <p>Release Date</p>
      <WishButton />
    </div>
  );
}

export default MovieCard;