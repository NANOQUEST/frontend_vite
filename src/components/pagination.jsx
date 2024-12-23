import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageClick, currentPage }) => {
    if (pageCount <= 1) return null;

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            forcePage={currentPage - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="flex items-center justify-center gap-2 mt-5" // Adjust spacing and alignment
            pageClassName="inline-flex" // Wrapper for each page number
            pageLinkClassName="px-4 py-2 border rounded-md text-gray-800 border-gray-300 hover:bg-gray-100 transition-colors" // Style for page links
            previousClassName="inline-flex" // Wrapper for previous button
            previousLinkClassName="px-4 py-2 border rounded-md text-gray-500 border-gray-300 hover:bg-gray-200" // Style for previous link
            nextClassName="inline-flex" // Wrapper for next button
            nextLinkClassName={`px-4 py-2 border rounded-md text-gray-500 border-gray-300 hover:bg-gray-200 
                            ${
                                currentPage === pageCount
                                    ? "cursor-not-allowed opacity-50"
                                    : ""
                            }
                            `} // Style for next link
            breakClassName="inline-flex" // Wrapper for break element
            breakLinkClassName="px-4 py-2 border rounded-md text-gray-500 border-gray-300"
            activeClassName="text-purple-600 border-purple-600 font-bold"
        />
    );
};

export default Pagination;
