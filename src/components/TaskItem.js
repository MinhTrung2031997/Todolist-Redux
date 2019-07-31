import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';


class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onUpdateTask =  () => {
        this.props.onUpdateTask(this.props.task);
        this.props.onOpenForm();
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td >{index + 1}</td>
                <td>{task.name}</td>
                <td>
                    <span className={task.status ? 'label label-danger' : 'label label-info'}
                        onClick={this.onUpdateStatus}
                    >{task.status ? 'Kích Hoạt' : 'Ẩn'}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning"
                        onClick={this.onUpdateTask}
                    >
                        <i className="fas fa-pencil-alt mr-5"></i>Sửa
                    </button>&nbsp;
                            <button type="button" className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <i className="fas fa-trash-alt mr-5"></i>Xóa
                    </button>
                </td>
            </tr>

        );
    }
}

const mapStatetoProps = (state) =>{
    return {
        
    };
};

const mapDispatchtoProps = (dispatch,props) =>{
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.updateStatus(id))
        },
        onUpdateTask : (task) =>{
            dispatch(actions.updateTask(task))
        },
        onDeleteTask : (id) =>{
            dispatch(actions.deleteTask(id));
        },
        onCloseForm :() =>{
            dispatch(actions.closeForm());
        },
        onOpenForm :() =>{
            dispatch(actions.openForm());
        }
        
    };
};

export default connect(mapStatetoProps,mapDispatchtoProps)(TaskItem);
