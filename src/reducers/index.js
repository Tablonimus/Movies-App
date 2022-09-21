import { ADD_MOVIE_FAVORITE, REM_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, RESET_DETAILS, RESET_DETAIL } from '../actions/index.js'

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export default function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {

        let peliculaEncontrada = state.moviesFavourites.find((peliculaBuscada) => peliculaBuscada.imdbID === action.payload.imdbID);    //aplicado para eliminar repetidas

        if (peliculaEncontrada) return state;                                                                                             //retorar  state, se rompe con null


        else return {
            ...state,
            moviesFavourites: state.moviesFavourites.concat(action.payload)
            //  moviesFavourites: [...state.moviesFavourites, action.payload]
        }
    }

    if (action.type === REM_MOVIE_FAVORITE) {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter((pelicula) => pelicula.imdbID !== action.payload)

        }
    }

    if (action.type === GET_MOVIES) {
        return {
            ...state,
            moviesLoaded: action.payload
        };
    }

    if (action.type === GET_MOVIE_DETAIL) {
        return {
            ...state,
            movieDetail: action.payload,
        };
     
    }

    if (action.type === RESET_DETAIL) {
        return {
            ...state,
            movieDetail: {},
        }
    }
    
    return state;
}

