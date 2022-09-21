export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REM_MOVIE_FAVORITE = "REM_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL= "GET_MOVIE_DETAIL";
export const RESET_DETAIL = "RESET_DETAIL"

export function addMovieFavorite(title) {
    return { type: "ADD_MOVIE_FAVORITE", payload: title };
}

export function getMovies(title) {
    return function (dispatch) {
        return fetch(`https://www.omdbapi.com/?apikey=71f10cf6&s=` + title)    //71f10cf6 apikey api  key
            .then(response => response.json())
            .then(json => {
                dispatch({ 
                    type: "GET_MOVIES" , 
                    payload: json.Search });
            });
    };
}

export function reset() {
    return { type: "RESET_DETAIL" };
  }



export function removeMovieFavorite(id) {
    return { type: "REM_MOVIE_FAVORITE", payload: id }
}



export function getMovieDetail(idMovie) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=71f10cf6&i=${idMovie}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
};
}