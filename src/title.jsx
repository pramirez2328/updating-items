import React, { Component } from 'react';
import './App.css'
class TitleComponent extends Component {

	render() {
		return (
      <div id="title">
        <h1 className="text-center my-2">
          Currently, there are {' '}
          <span id="numberOfMovies">{ this.props.numberOfMovies }</span> {' '}
					movies in the store
        </h1>
      </div>
    );
  }
}
export default TitleComponent;