import {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'

// Components
import MovieList from '../components/MovieList'
import { ResponseMovie } from '../models/ResponseMovie'

const SearchMovie = () => {
  const { name } = useParams();
  const nameWithoutSpace = name?.replace(/ /g, "-")

  const fetchSearchResult = async (): Promise<ResponseMovie[]> => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${nameWithoutSpace}`
    const response = await axios.get(URL)
    const result = response.data.results as ResponseMovie[]
    
    result.filter(movie => movie.poster_path != null)
              .map(movie => {
                            movie.poster_path = "https://image.tmdb.org/t/p/original" + movie.poster_path
                            return movie
                            })


    return result
  }

  const {data, status} = useQuery(["search", nameWithoutSpace], fetchSearchResult)

  if (status === 'error') {
    console.log("Error occured in Search")
  }
  
  if (status === 'success') {
    console.log(data)
  }

  return (
    <div>
        {
          data && <MovieList movies={data} title={`Search/${nameWithoutSpace}`}/>
        }
    </div>
  )
}

export default SearchMovie
