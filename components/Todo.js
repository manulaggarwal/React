import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update: false
        }
        this.onEdit = this.onEdit.bind(this);
        this.text = props.text;
        this.id = props.id;
    }

    componentWillReceiveProps() {
        if (this.state.update) {
            this.setState({
                update: !this.state.update
            })
        }
    }

    onEdit() {
        let update = this.state.update;
        if (update && (this.text !== this.input.value)) {
            this.props.onTodoUpdate(this.id, this.input.value);
            this.forceUpdate();
        } else {
            this.setState({
                update: !update
            });
        }
    }

    render() {
        const {onClick, completed, text} = this.props;
        return (
            <li  
                    style={{
                        textDecoration: completed? 'line-through': 'none',
                        cursor: 'pointer'
                    }}>
                    <strong style={{
                        display: !this.state.update?'block':'none'
                    }}  onClick={onClick} >
                        {text}
                    </strong>
                
                <input ref={node=>{this.input=node}} type="text" className="form-control" defaultValue={this.text} style={{
                        display: this.state.update?'block':'none'
                    }}/>
                <div className="btn-group">
                    <button type="button" onClick={this.onEdit} className={this.state.update?'btn btn-success':'btn btn-warning'}>
                        {this.state.update?'Update':'Edit'}
                    </button>
                    <button type="button" className="btn btn-danger" onClick={()=>{this.props.onTodoDelete(this.id)}}>Delete</button>
                </div>
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;