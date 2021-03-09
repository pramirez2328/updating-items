import React, { Component } from 'react';
import logo from './logo.png';
class StoreLogo extends Component {

	render() {
		return (
      <div id="logo">
        <img
          src={logo}
          alt="logo"
        />
      </div>
    );
	}
}

export default StoreLogo;