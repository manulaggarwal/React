import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import SelectedFilter from '../containers/SelectedFilter';

const App = () => (
    <div>
    <div className="col-sm-1"></div>
    <div className="col-sm-2">
        <AddTodo />
        <VisibleTodoList />
        <SelectedFilter />
        <Footer /> 
    </div>
    </div>
)
export default App;