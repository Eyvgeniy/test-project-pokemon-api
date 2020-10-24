import { Route, Redirect } from 'react-router-dom';

const RouteWithCondition = ({ condition, to, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return condition ? children : <Redirect to={to} />;
      }}
    />
  );
};

export default RouteWithCondition;
