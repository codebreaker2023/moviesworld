const Movie = (movie: {poster: string}) => {
  return (
    <div className='movie'>
        <img src={movie.poster} alt="poster" />
    </div>
  )
}

export default Movie
