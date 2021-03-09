import React, { Component } from 'react';
import {movies} from './services/fakeMovieService'
import './App.css'
class TitleComponent extends Component {
	state = { moviesQuantity: movies.length }
	render() {
		return (
      <div id="title">
        <h1 className="text-center my-2">
          Showing {this.state.moviesQuantity} movies in the database
        </h1>
      </div>
    );
  }
}
export default TitleComponent;