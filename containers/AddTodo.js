import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import Form from '../components/Form';

let AddTodo = ({onSubmit})=>{
    let input;
    return (
        <Form onSubmit={()=>onSubmit(input)}>
            <div className="form-group">
                <input placeholder="Add Todo" ref={node=>{input=node}} className="form-control"/>
                <br />
                <button type="submit" className="btn btn-primary form-control">
                    Add Todo
                </button>
            </div>
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