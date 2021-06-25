import React from 'react';
import PropTypes from 'prop-types';

import './AutoCompleteInput.css';

const DEBOUNCE_DELAY = 500;


const AutoCompleteInput = () => {

  return (
    <div className="wrapper">
      <div className="control">
        <input type="text" className="input" placeholder="Filtrar pokemon" />
      </div>
      <div className="list" />
    </div>
  )
};

AutoCompleteInput.propTypes = {
  placeholder: PropTypes.string,
  onSelectedItem: PropTypes.func.isRequired,
}

AutoCompleteInput.defaultProps = {
  placeholder: '',
};

export default AutoCompleteInput;
