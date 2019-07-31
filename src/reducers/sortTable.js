import * as types from './../constants//ActionsType';

var initialState = {
    by : '',
    value : 1
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_TABLE:
            return {
                by : action.sort.name,
                value : action.sort.status
            };
        default:
            return state;
    }
}

export default myReducer;