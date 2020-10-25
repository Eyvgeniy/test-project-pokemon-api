import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

const Home = ({ users, isValid }) => {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <LoginForm users={users} isValid={isValid} />
    </div>
  );
};

export default Home;

Home.propTypes = {
  users: PropTypes.array.isRequired,
  isValid: PropTypes.func.isRequired,
};
