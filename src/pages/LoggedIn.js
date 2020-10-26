import { useHistory } from 'react-router-dom';

const LoggedIn = () => {
  const history = useHistory();
  setTimeout(() => history.push('/cards'), 3000);

  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div>
        <h2>You are already Logged In, redirecting to Cards Page!</h2>
      </div>
    </div>
  );
};

export default LoggedIn;
