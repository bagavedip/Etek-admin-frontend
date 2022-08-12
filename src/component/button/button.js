import React from 'react';
import PropTypes from 'prop-types';

import '../css/button.css';

const Button = ({name, size}) => (
    <button
        className='app-button'>
        {name}
    </button>
);

Button.propTypes = {
    styleClass: PropTypes.string,
    name: PropTypes.string.isRequired,
};

Button.defaultProps = {
    styleClass: 'btn-primary'
};

export default Button;