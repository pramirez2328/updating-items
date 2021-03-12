import React from 'react';

const Tablehead = () => {
	return (
    <thead
      id="headTable"
      style={{
        fontSize: "1.5rem",
        textAlign: "center",
      }}
    >
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Genre</th>
        <th scope="col">Stock</th>
        <th scope="col">Rate</th>
        <th scope="col">Popularity</th>
        <th scope="col">Rent</th>
        <th scope="col">Return</th>
      </tr>
    </thead>
  );
}

export default Tablehead;