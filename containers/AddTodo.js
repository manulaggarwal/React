import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import Form from '../components/Form';

let AddTodo = ({onSubmit})=>{
    let input;
    return (
        <Form onSubmit={()=>onSubmit(input)}>
            <input ref={node=>{input=node}} />
            <button type="submit">
                Add Todo
            </button>
        </Form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (input) => {
            if (!input.value.trim()) {
                input.value = '';
                return;
            }
            dispatch(addTodo(input.value));
            input.value = '';
        }
    };
}

AddTodo = connect(
    null,
    mapDispatchToProps
)(AddTodo);
export default AddTodo;