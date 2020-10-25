import { useState } from 'react';
import PropTypes from 'prop-types';

const Selector = ({ name, list, setValue, isLoading }) => {
  const [value, setCurrentValue] = useState(name);

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentValue(e.target.value);
    setValue(e.target);
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
  setValue: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
