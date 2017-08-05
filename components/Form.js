import React from 'react';
import PropTypes from 'prop-types';

const Form = ({onSubmit,children})=>{
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            onSubmit()
        }}>
            {children}
        </form>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form;