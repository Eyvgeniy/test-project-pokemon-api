import paginate from '../utils/paginate';
import PropTypes from 'prop-types';

const PaginateBox = ({ page, pageSize, total, setQuery }) => {
  if (total === 0) {
    return null;
  }
  const pagesList = paginate(page, pageSize, total);
  const handleClick = (currentPage) => (e) => {
    e.preventDefault();
    setQuery((state) => ({ ...state, page: currentPage }));
  };
  return (
    <div className="d-flex justify-content-center py-1" style={{ backgroundColor: '#EBEBEB' }}>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center my-0">
          {pagesList.map((page, i) => {
            return (
              <li key={i} className="page-item">
                <button
                  className="btn text-dark mx-1"
                  style={{ backgroundColor: '#EBEBEB', borderStyle: 'none' }}
                  onClick={handleClick(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default PaginateBox;

PaginateBox.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
  setQuery: PropTypes.func,
};
