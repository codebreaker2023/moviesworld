import React from 'react'
import {Link} from 'react-router-dom'
import Movie from './Movie'
import { ResponseMovie } from '../models/ResponseMovie'
import { motion } from 'framer-motion'
 

const MovieList: React.FC<{title: string, movies?: ResponseMovie[]}> = ({title, movies}) => {
  
  return (
    <div className='movie-list'>
      <h2>{title}</h2>
      <motion.div className='movie-list-view' layout>
              {
                movies?.map(
                  movie => movie.poster_path && 
                  <Link to={`/movies/${movie.id}`} key={movie.id}><Movie poster={movie.poster_path}/></Link>)
              }
      </motion.div>
    </div>
  )
}

export default MovieList

