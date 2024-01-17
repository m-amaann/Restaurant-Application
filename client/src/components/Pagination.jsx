import React from 'react'
import Paginate from 'react-paginate';

import '../css/component/Pagination.css';


const Pagination = ({ pageCount, handlePageClick, currentPage }) => {
    return (
        <Paginate
            previousLabel={'← '}
            nextLabel={' →'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            forcePage={currentPage}
            subContainerClassName={'pages pagination'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
        />
    )
}

export default Pagination
