import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  //we need an array [1...pagesCount] and map each element to the list items below
  //so we have that many number of pages on the page only
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pages.map((p) => (
            <li className="page-item" key={p}>
              <a className="page-link" onClick={() => props.onPageChange(p)}>
                {p}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
