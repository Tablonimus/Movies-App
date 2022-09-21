import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions/index.js";

export class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.moviesFav ? this.props.moviesFav.map((element) => {
            return (
              <div key={element.imdbID}>
                <label  >{element.Title}</label>
                <button onClick={() => this.props.removeMovieFavoriteNow(element.imdbID)}>X</button>
              </div>
            )
          }
          ) :<h3>Agrega tus peliculas favoritas aquí!
          </h3>
          }
         
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    moviesFav: state.moviesFavourites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavoriteNow: id => dispatch(removeMovieFavorite(id)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedList);
