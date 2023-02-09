import { useFetchMovies } from '../hooks/useFetchMovies'
import { ResponseMovie } from '../models/ResponseMovie'
import Carousel from '../components/Carousel'

const Home = () => {
  const latest: ResponseMovie[] = useFetchMovies("now_playing")
  const popular: ResponseMovie[] = useFetchMovies("popular")
  const topRated: ResponseMovie[] = useFetchMovies("top_rated")
  const upcoming: ResponseMovie[] = useFetchMovies("upcoming")
  
  return (
    <div>
        <Carousel carouselName="Latest Movies" movies={latest} />
        <Carousel carouselName="Top Rated" movies={topRated} />
        <Carousel carouselName="Popular Movies" movies={popular} />
        <Carousel carouselName='Upcoming movies' movies={upcoming} />
    </div>
  )
}

export default Home
