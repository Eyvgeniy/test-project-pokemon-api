import { useState } from 'react';
import PropTypes from 'prop-types';

const Selector = ({ name, list, setQuery, isLoading }) => {
  const [value, setValue] = useState(name);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    setQuery((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <select
      name={name}
      className="form-select  my-3 w-75"
      disabled={isLoading}
      value={value}
      onChange={handleChange}
    >
      <option value="">{name}</option>
      {list.map((type, i) => (
        <option key={i} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default Selector;

Selector.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  setQuery: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
