import {CSSProperties} from 'react'
import { useParams } from 'react-router-dom'
import MovieList from '../components/MovieList'
import { useQuery } from 'react-query'
import axios from 'axios'
import { ResponseMovieDetails } from '../models/ResponseMovieDetails'
import { ResponseMovie } from '../models/ResponseMovie'
 

const MovieView = () => {
    const { id } = useParams()

    const fetchMovieDetails = async (): Promise<ResponseMovieDetails> => {
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        const result = response.data as ResponseMovieDetails
        result.backdrop_path = "https://image.tmdb.org/t/p/original" + result.backdrop_path
        result.poster_path = "https://image.tmdb.org/t/p/original" + result.poster_path
        
        return response.data as ResponseMovieDetails
    }

    const fetchSimilarMovies = async (): Promise<ResponseMovie[]> => {
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=1`)
        const result = response.data.results as ResponseMovie[]
        result.filter(m => m.poster_path != null).map(m => m.poster_path = "https://image.tmdb.org/t/p/original" + m.poster_path)
        return result;
    }

    const movie = useQuery(['id', id], fetchMovieDetails)
    const similarMovies = useQuery('similar', fetchSimilarMovies)

    if (movie.status === 'error') {
        console.log("Error occured in MovieView")
    }

    const movieDetailsStyle: CSSProperties= {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), black), url(${movie.data?.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
    }


  return (
    movie.data ? (<div className="movie-view">
                <div style={movieDetailsStyle}>
                     <div className='movie-details'>
                        <div className="poster">
                            <img src={movie.data?.poster_path} alt="poster"/>
                        </div>
                        <div className="details">
                            <h1>{movie.data?.original_title}</h1>
                            <p><span>Description:</span> {movie.data.overview}</p>
                            <p><span>Released:</span> {movie.data.release_date}</p>
                            <p><span>Genre:</span> {movie.data?.genres.map(genre => genre.name).join(', ')}</p>
                            <p><span>Language:</span> {movie.data.original_language}</p>
                            <p><span>IMDB:</span> {movie.data.vote_count}</p>
                            <p><span>Producted By:</span> {movie.data.production_companies.map(p => p.name).join(", ")}</p>
                        </div>
                     </div>
                </div>
                <div className='recommendation'>
               
                    <MovieList title="You may also Like this" movies={similarMovies.data}/>
                </div>
            </div>)
            : (<h1>Not Found</h1>)
  )
}

export default MovieView
