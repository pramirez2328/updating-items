
import React, { Component } from 'react';
import {movies} from './services/fakeMovieService';
import './App.css';
import TitleComponent from './title';
import StoreLogo from './storeLogo';
import TableMovies from './tableMovies';
import Footer from './footer';
import Pagination from './pagination';
import { funcPagination } from "./util/funcToPagination";

//setting the initial number(in stock) of movies of the same title
let initialStock = movies.map(value => {
	let obj = {id:value._id, initialStock:value.numberInStock};
  return obj
});

// number of movies per page
const numberOfMoviesPerPage = 5;
//variable to initate the constructor
let currentMovies = movies.length;
//variable to calculate the number of button needed
let numberOfPages = Math.ceil(movies.length/numberOfMoviesPerPage);
//external function to allocate the movies in several objects,
//depending on the length of the database, one object per page
let arrOfMovies = funcPagination(movies, numberOfPages, numberOfMoviesPerPage);

//Main class collecting several components
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			availableMovies : currentMovies,
      inventary: movies,
			moviesPerPage: numberOfMoviesPerPage,
			pageDisplaying: arrOfMovies.page1
    };
		this.handleDeleting = this.handleDeleting.bind(this);
	};

// updating the movies in stock(subtracting)
	handleDeleting (id) {
      movies.forEach((movie) => {
        if (movie._id === id) {
          if (movie.numberInStock === 0){
            alert("Currently this movie title is not avilable");
          } else if (movie.numberInStock === 1) {
					  if(movie.liked === false) {
              movie.liked = true;
						}
						currentMovies -= 1;
						movie.numberInStock -= 1;
					} else {
            movie.numberInStock -= 1;
          }
        }
      });

    this.setState({
			inventary : movies,
      availableMovies : currentMovies
		});
	}

//updating the movies in stock (adding)
	handleReturn = (id) => {
	let initalQuantity=	initialStock.find(value => {
		return value.id === id;
		}
	);
	console.log(initalQuantity);
		movies.forEach((movie) => {
      if (movie._id === id) {
				if (movie.numberInStock === 0) {
          movie.numberInStock += 1;
          currentMovies += 1;
        } else if (movie.numberInStock === (initalQuantity.initialStock - 1)) {
					  movie.numberInStock += 1;
          if (movie.liked === true) {
            movie.liked = false;
          }
        } else if (movie.numberInStock === initalQuantity.initialStock) {
          alert(`You Are Trying To Add The Same Movie Again!
This Movie Is Already In The Database!`);
        } else {
          movie.numberInStock += 1;
        }

      }
    });

		this.setState({
      inventary: movies,
      availableMovies : currentMovies,
    });
	}

// toggling the heart shape figure
	handleLikes = (id) =>{
			movies.forEach((objMovie) => {
        if (objMovie._id === id) {
          objMovie.liked === false ? objMovie.liked = true : objMovie.liked = false;
        }
      });

      this.setState({
        inventary: movies
      });
	}

// diplaying the number of movies per page
	handlePages = (inventory, pageNumber) => {
	  this.setState(
			{
			 pageDisplaying:inventory[`page${pageNumber}`]
			}
		)
	}

	render() {
    return (
      <div id="container">
        <div id="content">
          {/* header components */}
          <div id="topInfo">
            <StoreLogo />
            <TitleComponent numberOfMovies={this.state.availableMovies} />
          </div>
          {/* content Component */}
          <div id="main">
            <table className=" table table-hover">
              <TableMovies
                key={movies._id}
                inventary={this.state.pageDisplaying}
                onDelete={this.handleDeleting}
                onReturn={this.handleReturn}
                liked={this.handleLikes}
              />
            </table>
          </div>
          {/* interacting buttons */}
          <Pagination
            inventory={arrOfMovies}
            pages={numberOfPages}
            onPages={this.handlePages}
            pageDisplaying={this.state.pageDisplaying}
          />
          {/* simple footer with my name */}
          <Footer />
        </div>
      </div>
    );
  }

}


export default App;
