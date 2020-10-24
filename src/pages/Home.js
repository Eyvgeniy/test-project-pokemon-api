import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

const Home = ({ users, setUser }) => {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <LoginForm users={users} setUser={setUser} />
    </div>
  );
};

export default Home;

Home.propTypes = {
  users: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
};
