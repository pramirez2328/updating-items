import React, { Component } from 'react';
class TableHead extends Component {

	render() {
		return (
      <thead style={{ border: "solid 3px red", fontSize: "1.5rem", textAlign:'center' }}>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
    );
	}
}

export default TableHead;