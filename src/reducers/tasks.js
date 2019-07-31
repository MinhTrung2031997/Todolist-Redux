import * as types from './../constants/ActionsType';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];


var s4 = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}


var generateID = () => {
    return (s4() + '-' + s4())
}

var findIndex = (tasks, id) => {
    var reSult = -1;
    tasks.forEach((task, index) => {
        if (task.id === id)
            reSult = index;
    });
    return reSult;
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var index = -1;
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.name = "true" ? true : false
            }

            if (task.id === '') {
                task.id = generateID();
                state.push(task)
            } else {
                index = findIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
            var index_update = findIndex(state, action.id);
            state[index_update] = {
                ...state[index_update],
                status: !state[index_update].status
            }

            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            var index_delete = findIndex(state, action.id);
            state.splice(index_delete, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
};

export default myReducer;