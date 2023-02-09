import { ResponseGenre } from "./ResponseGenre"
import { ResponseProductionCompany } from "./ResponseProductionCompany"

export interface ResponseMovieDetails {
    backdrop_path?: string,
    genres: ResponseGenre[],
    id: number,
    original_language: string,
    original_title: string,
    overview?: string,
    poster_path?: string,
    release_date: string,
    title: number,
    vote_count: number,
    production_companies: ResponseProductionCompany[]
}