import { PropTypes } from 'prop-types';
const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
    
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(
            <li
              key={i}
              className={`page-item ${currentPage === i ? 'active' : ''}`}
              onClick={() => onPageChange(i)}
            >
              {i}
            </li>
          );
        }
    
        return pageNumbers;
      };
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          onPageChange(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
        if (currentPage < totalPages) {
          onPageChange(currentPage + 1);
        }
      };
    
      return (
        <ul className="pagination mt-5">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={handlePrevPage}>
            <i className="fas fa-chevron-left"></i>
          </li>
    
          {renderPageNumbers()}
    
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`} onClick={handleNextPage}>
            <i className="fas fa-chevron-right"></i>
          </li>
          
        </ul>
      );
}
PaginationComponent.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
   
  };
export default PaginationComponent