import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

const Home = ({ isValid }) => {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="d-flex">
        <LoginForm isValid={isValid} />
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  isValid: PropTypes.func.isRequired,
};
