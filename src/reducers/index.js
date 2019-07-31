import isDisplayForm from './isDisplayForm'
import tasks from './tasks';
import { combineReducers } from 'redux';
import taskEditing from './taskEditing';
import filterTable from './filterTable';
import searchTable from './searchTable';
import sortTable from './sortTable';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    taskEditing,
    filterTable,
    searchTable,
    sortTable
});

export default myReducer;