import React, { Fragment } from 'react';
import TableHead from './tableHead';
import PopularMovie from './popularMovie';
import { functPagination } from "./util/funcToPagination";
import { numberOfMoviesPerPage} from './App'

const  TableMovies  = ({ inventary, pagesDisplaying, onDelete, onReturn,liked }) => {
	let arrOfMovies = functPagination(inventary, pagesDisplaying, numberOfMoviesPerPage);
	console.log(arrOfMovies);
	return (
        <Fragment>
          <TableHead />
          <tbody>
            {arrOfMovies.map((movie) => {
							
              return (
                  <tr key={movie._id}>
                    <th scope="row">{movie.title}</th>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td >
                     <PopularMovie liked={liked} id={movie._id} status = {movie.liked}/>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => onDelete(movie._id)}
                      >
                        Rent
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => onReturn(movie._id)}
                      >
                        Return
                      </button>
                    </td>
                  </tr>
              );
            })}
          </tbody>
        </Fragment>
    );
}

export default TableMovies;
