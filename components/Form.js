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
        <div className="row">
            <div className="row col-md-12"></div>
            <div className="col-sm-4">
                <button type="submit" onClick={()=>onSubmit(form)} className="btn btn-primary form-control">
                    Add Todo
                </button>
            </div>
            <div className="col-sm-4">
                <Input onBlur={onBlur} name={name} className="form-control" onChange={onChange}/>
            </div>
            
        </div>
    );
}

export default Form;