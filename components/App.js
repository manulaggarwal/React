import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import SelectedFilter from '../containers/SelectedFilter';

const App = () => (
    <div>
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                <strong>MY TODO LIST</strong>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 sheet">
                <AddTodo/>
                <VisibleTodoList/>
                <SelectedFilter/>
                <Footer/>
            </div>
            <div className="col-sm-4"></div>
        </div>
    </div>
)
export default App;