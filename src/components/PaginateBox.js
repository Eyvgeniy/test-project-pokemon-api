import PropTypes from 'prop-types';
import cn from 'classnames';
import paginate from '../utils/paginate';

const PaginateBox = ({ page, pageSize, total, setPage }) => {
  if (total === 0) {
    return null;
  }
  const pagesList = paginate(page, pageSize, total);
  const handleClick = (currentPage) => () => {
    if (currentPage === '...') {
      return;
    }
    setPage(currentPage);
  };
  return (
    <div className="d-flex justify-content-center py-1" style={{ backgroundColor: '#EBEBEB' }}>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center my-0">
          {pagesList &&
            pagesList.map((p, i) => {
              const btnClass = cn({
                'btn text-dark mx-1': true,
                'btn-active': page === p,
              });
              return (
                <li key={i} className="page-item">
                  <button
                    className={btnClass}
                    style={{ backgroundColor: '#EBEBEB', borderStyle: 'none' }}
                    onClick={handleClick(p)}
                  >
                    {page === p ? <strong>{p}</strong> : p}
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
