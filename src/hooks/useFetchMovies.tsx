import axios from "axios"
import { useEffect, useState } from "react"
import { ResponseMovie } from "../models/ResponseMovie"

const BASE_URL = `https://api.themoviedb.org/3/movie/category?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`


// To Fetch Popular movies, just give "popular" to the hook and so on

export const useFetchMovies = (category: string): ResponseMovie[] => {
    const url = BASE_URL.replace("category", category)
    const [movies, setMovies] = useState<ResponseMovie[]>([])

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get(url)
            const result = response.data.results as ResponseMovie[]
            result.filter(movie => movie.poster_path != null).map(movie => movie.poster_path = "https://image.tmdb.org/t/p/original" + movie.poster_path)
            setMovies(result)
        }

        fetchData()

    }, [])

    return movies
}
