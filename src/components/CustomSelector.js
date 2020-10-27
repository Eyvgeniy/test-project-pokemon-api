import { useState } from 'react';
import PropTypes from 'prop-types';

const CustomSelector = ({ name, list, setValue, isLoading }) => {
  const [value, setCurrentValue] = useState(name);

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentValue(e.target.value);
    setValue(e.target);
  };

  return (
    <div>
      <div>
        <button>name</button>
      </div>
      <div>
        <input></input>
        {}
      </div>
    </div>
  );
};

export default CustomSelector;
