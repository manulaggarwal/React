import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import Input from '../components/Input';
import Form from '../components/Form';

let AddTodo = ({onSubmit})=>{
    return (
        <Form name="addTodo" onSubmit={onSubmit}/>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: input => {
            dispatch(addTodo(input.addTodo));
        }
    };
}

AddTodo = connect(
    null,
    mapDispatchToProps
)(AddTodo);
export default AddTodo;

//<input placeholder="Add Todo" ref={node=>{input=node}} className="form-control"/>