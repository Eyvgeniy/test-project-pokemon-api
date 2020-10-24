import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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

RouteWithCondition.propTypes = {
  condition: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
};
