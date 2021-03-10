import React, { Component } from 'react';
import {movies} from './services/fakeMovieService';
class RowMovie extends Component {

	render() {
		return (
      <tbody>
        {movies.map((movie) => {
          return (
            <tr key={movie._id}>
              <th scope="row">{movie.title}</th>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => this.props.onDelete(movie._id)}
                >
                  Rent
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
	}
}

export default RowMovie;