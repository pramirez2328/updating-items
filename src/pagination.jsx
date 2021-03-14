import React from 'react';
import _ from 'lodash';

const Pagination = ({inventory, pages, onPages, pageDisplaying}) => {

	if (pages ===  1) {
		return null;
	}

	let activeClass;
	for (let key in inventory) {
		if (inventory[key] === pageDisplaying) {
      activeClass = key;
		}
	}

  let totalPages = _.range(1, pages + 1);
	return (
    <nav aria-label="...">
      <ul className="pagination">
				{totalPages.map(page => {
					let conditionClass = activeClass === `page${page}` ? "page-item active" :  "page-item";
					return(
            <li key={page} className={conditionClass}>
              <a
                className="page-link"
                href="#content"
                onClick={() => onPages(inventory, page)}
              >
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
