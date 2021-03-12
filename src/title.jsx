import React, { Fragment } from 'react';
import './App.css'

const TitleComponet = ({numberOfMovies}) => {
	return (  <Fragment>
        <h1 className="text-center my-2" >
          Currently, there are {' '}
          <span id="numberOfMovies">
						{ numberOfMovies }
					</span> {' '}
					movies in the store
        </h1>
      </Fragment> );
}

export default TitleComponet;