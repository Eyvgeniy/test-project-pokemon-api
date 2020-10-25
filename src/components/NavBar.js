import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const NavBar = ({ isLinkBack, logout }) => {
  const history = useHistory();

  return (
    <div style={{ backgroundColor: '#EBEBEB' }}>
      <ul className="nav d-flex justify-content-between border">
        <li className="nav-item">
          {isLinkBack && (
            <button
              className="btn btn-link text-dark"
              onClick={() => history.goBack()}
              style={{ borderStyle: 'none' }}
            >
              &lt; Back
            </button>
          )}
        </li>
        <li className="nav-item">
          <button className="btn btn-link text-dark" onClick={() => logout()}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;

NavBar.propTypes = {
  isLinkBack: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};
