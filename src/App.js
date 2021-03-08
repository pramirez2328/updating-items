
import React from 'react';
import {movies} from './services/fakeMovieService';

 const styles = {
   width: "80%",
   margin: "auto",
 };

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			numberOfMovies: movies.length
		}
		this.handleUpdatingTheNumber = this.handleUpdatingTheNumber.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	};

	handleDelete () {
    return this.handleUpdatingTheNumber();
  };

	handleUpdatingTheNumber () {
		this.setState({
			numberOfMovies: this.state.numberOfMovies - 1
		})
	}

	render(){
    return (
      <div style={styles}>
        <h1 style={{ textAlign: "center", margin: "2rem" }}>
          Showing {this.state.numberOfMovies} movies in the database
        </h1>
        <table className="table table-striped">
          <thead style={{ textTransform: "uppercase", border: "solid 2px red" }}>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>{movies.map((movie) => {
                    return <tr key={movie._id}>
                             <th scope="row">{movie.title}</th>
                               <td>{movie.genre.name}</td>
                               <td>{movie.numberInStock}</td>
                               <td>{movie.dailyRentalRate}</td>
                               <td>
				                          <button className="hover" onClick={this.handleDelete}>
                                    Delete
                                </button>
				                       </td>
                            </tr>
        })}</tbody>
        </table>
      </div>
    );
  }

	}


export default App;
