import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from '../../actions/index.js'


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value }, () =>  //esta linea con función se agrega para
      this.props.getMovieNow(this.state.title));         // que tome el estado mientras se escribe y retorne(estilo predictiv)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovieNow(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies ? this.props.movies.map((element) => {
            return (
              <div key={element.imdbID}>
                <Link to={`/movie/${element.imdbID}`}>
                  <label>{element.Title}</label>
                </Link>
                <button onClick={() => this.props.addMovieFavoriteNow(element)}>FAV</button>
              </div>
            )
          }
          ) : <h3>Introduce un título valido</h3>
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavoriteNow: movie => dispatch(addMovieFavorite(movie)),
    getMovieNow: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
