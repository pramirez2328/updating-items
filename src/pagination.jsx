import React from 'react';
import _ from 'lodash';

const Pagination = ({pages, onPages}) => {

	if (pages ===  1) {
		return null;
	}

  let totalPages = _.range(1, pages + 1);
	return (
    <nav aria-label="...">
      <ul className="pagination">
				{totalPages.map(page => {
	        return (
            <li key={page} className="page-item">
              <a className="page-link" href="#content" onClick={() => onPages(page)}>
                {page}
              </a>
            </li>
          );
				})}
      </ul>
    </nav>
  );
}

export default Pagination;