import * as types from './../constants/ActionsType';

export const listALL = () => {
    return {
        type: types.LIST_ALL
    }
}

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
}

export const updateTask = (task) => {
    return {
        type: types.UPDATE_TASK,
        task
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const filterTable = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter
    }
}

export const searchTable = (keyword) => {
    return {
        type: types.SEARCH_TABLE,
        keyword
    }
}

export const sortTable = (sort) => {
    return {
        type: types.SORT_TABLE,
        sort
    }
}