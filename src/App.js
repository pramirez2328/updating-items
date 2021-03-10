
import React from 'react';
import {movies} from './services/fakeMovieService';
import './App.css';
import TitleComponent from './title';
import TableHead from './tableHead';
import StoreLogo from './StoreLogo';
import RowMovie from './RowMovie';



class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			moviesInStock : movies.length,
			inventary : movies
		}

		this.handleDeleting = this.handleDeleting.bind(this);
	};


	handleDeleting (id) {

		let index = movies.map(obj => obj._id).indexOf(id);

		movies.forEach( movie => {
			if (movie._id === id) {
				if(movie.numberInStock === 1){
					movies.splice(index, 1);
				} else {
           movie.numberInStock -= 1;
				}
			}
		})

    this.setState({
			moviesInStock : movies.length,
      inventary: movies
		});
	}

	render(){
    return (
      <div id="container">
        <div id="topInfo">
          <StoreLogo />
          <TitleComponent numberOfMovies = {this.state.moviesInStock}/>
        </div>
        <table className="table table-hover">
          <TableHead />
          <RowMovie key={movies._id} onDelete={this.handleDeleting} />
        </table>
				<h6 className="text-center">proudly created by Pedro Ramirez</h6>
      </div>
    );
  }

	}


export default App;
