
import React, { Component } from 'react';
import {movies} from './services/fakeMovieService';
import './App.css';
import TitleComponent from './title';
import StoreLogo from './storeLogo';
import TableMovies from './tableMovies';
import Footer from './footer';
import Pagination from './pagination';


const initialStock = movies.map(value => {
	let obj = {id:value._id, initialStock:value.numberInStock};
 return obj
})

export const numberOfMoviesPerPage = 4;

//Main class collecting several components
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
      moviesInStock: movies.length,
      inventary: movies,
      pagesDisplay: Math.ceil(movies.length/numberOfMoviesPerPage),
			moviesPerPage: numberOfMoviesPerPage
    };
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
      inventary: movies,
			pagesDisplay: Math.ceil(movies.length/numberOfMoviesPerPage)
		});
	}

	handleReturn = (id) => {
	let initalQuantity=	initialStock.find(value => {
		return value.id === id;
		}
	);
		movies.forEach((movie) => {
      if (movie._id === id) {
				if (movie.numberInStock === initalQuantity.initialStock){
					alert('You are trying to add the same movie again! \n' +
					'The movie is already in the database!');
				} else {
         movie.numberInStock += 1;
				}

      }
    });

		this.setState({
       inventary: movies
    });
	}

	handleLikes = (id) =>{
			movies.forEach((objMovie) => {
        if (objMovie._id === id) {
          objMovie.liked = true;
        }
      });

      this.setState({
        inventary: movies,
      });
	}

	handlePages = (pageNumber) => {
		console.log(pageNumber);
	}

	render() {

    return (
      <div id="container">
        <div id="content">
          <div id="topInfo">
            <StoreLogo />
            <TitleComponent numberOfMovies={this.state.moviesInStock} />
          </div>

          <table className="table table-hover">
            <TableMovies
						  key={movies._id}
						  inventary={this.state.inventary}
						  pagesDisplaying = {this.state.pagesDisplay}
						  onDelete={this.handleDeleting}
						  onReturn={this.handleReturn} liked={this.handleLikes}/>
          </table>

					<Pagination  pages = {this.state.pagesDisplay} onPages = {this.handlePages}/>
          <Footer />
        </div>
      </div>
    );
  }

}


export default App;
