import React, { Fragment } from 'react';
import TableHead from './tableHead';
import PopularMovie from './popularMovie';



const  TableMovies  = ({ inventary, onDelete, onReturn,liked }) => {

	return (
        <Fragment>
          <TableHead />
          <tbody>
            {inventary.map((movie) => {

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
