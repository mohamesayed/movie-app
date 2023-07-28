import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ getPage }) {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  const pageCount = 500;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination p-3 justify-content-center "}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"pafe-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}

export default Pagination;
