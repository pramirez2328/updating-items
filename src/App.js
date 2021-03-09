
import React from 'react';
import {movies} from './services/fakeMovieService';
import './App.css';
import TitleComponent from './title';
import TableHead from './tableHead';
import StoreLogo from './StoreLogo';



class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inventary : movies
		}
	//	this.handleUpdatingTheNumber = this.handleUpdatingTheNumber.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	};

	handleDelete (id) {
		console.log(id);

	}
	// handleUpdatingTheNumber () {
	// 	this.setState({
	// 		numberOfMovies: this.state.numberOfMovies - 1
	// 	})
	// }

	render(){
    return (
      <div id="container">
        <div id="topInfo">
          <StoreLogo />
          <TitleComponent />
        </div>
        <table className="table table-hover">
          <TableHead />
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
                      onClick={() => this.handleDelete(movie._id)}
                    >
                      Rent
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
				<h6 className="text-center">proudly created by Pedro Ramirez</h6>
      </div>
    );
  }

	}


export default App;
