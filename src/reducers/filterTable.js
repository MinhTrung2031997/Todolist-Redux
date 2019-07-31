import * as types from './../constants//ActionsType';

var initialState = {
    name: '',
    status: -1
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            state.name = action.filter.name;
            state.status = action.filter.status;
            return state;
        default:
            return state;
    }
}

export default myReducer;