import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const Form = ({onSubmit,name})=>{
    let form={};
    let onChange = e => {
        form[e.target.name] = e.target.value;
    }
    let onBlur = e => {
        e.target.value = '';
    }
    return (
        <div>
            <Input onBlur={onBlur} name={name} className="form-control" onChange={onChange}/>
            <br />
            <button type="submit" onClick={()=>onSubmit(form)} className="btn btn-primary form-control">
                Add Todo
            </button>
            <br />
            <br />
        </div>
    );
}

export default Form;