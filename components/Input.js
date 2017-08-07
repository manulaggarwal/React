import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, onBlur, className, onChange, placeholder='', type='text', value}) => 
<input onBlur={onBlur} name={name} onChange={onChange} placeholder={placeholder} type={type} defaultValue={value} className={className} />

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
}

export default Input;