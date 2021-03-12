import React, {Fragment} from 'react';
import logo from './logo.png';

const StoreLogo = () => {
	return (
	    <Fragment >
        <img
				  id="logo"
          src={logo}
          alt="logo"
        />
      </Fragment>
	);
}

export default StoreLogo;