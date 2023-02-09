import { ResponseMovie } from '../models/ResponseMovie'
import { Link } from 'react-router-dom'
import Movie from '../components/Movie'


interface ICarouselProps {
    movies: ResponseMovie[],
    carouselName: string
}

const Carousel = ({movies, carouselName}: ICarouselProps) => {
  return (
    <div className='carousel'>
        <h2>{carouselName}</h2>
        <div className='carousel-content'>
            {
                movies?.map(movie => movie.poster_path && <Link to={`/movies/${movie.id}`} key={movie.id}><Movie poster={movie.poster_path}/></Link>)
            }
        </div>
    </div>
  )
}

export default Carousel
