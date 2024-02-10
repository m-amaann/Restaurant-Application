// PaginationComponent.jsx
import React from 'react';
import ReactPaginate from 'react-paginate';

const PaginationComponent = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={'prev'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  );
};

export default PaginationComponent;
