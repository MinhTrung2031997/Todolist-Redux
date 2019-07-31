import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from './../actions/index';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    componentWillMount() {
        if (this.props.taskEditing) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            });
        }
    }

    componentWillReceiveProps(nextpProps) {
        if (nextpProps && nextpProps.taskEditing) {
            var taskEditing = nextpProps.taskEditing;
            if (taskEditing) {
                this.setState({
                    id: taskEditing.id,
                    name: taskEditing.name,
                    status: taskEditing.status
                });
            }
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.onClear();
        this.onCloseForm();
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onClear = () => {
        this.setState({
            id :'',
            name: '',
        });
    }

    render() {
        var { id } = this.state;
        var { name, status } = this.state;
        if (!this.props.isDisplayForm) return '';
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <span className="pull-right">
                        <i className="fas fa-times-circle"
                            onClick={this.onCloseForm}
                        ></i></span>
                    <h3 className="panel-title">{id === '' ? 'Thêm Công Việc' : 'Cập Nhật Công Việc'}</h3>

                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label >Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name='name'
                                onChange={this.onChange}
                                value={name}
                            />
                            <label className="mt-5">Trạng Thái</label>
                            <select className="form-control"
                                name='status'
                                value={status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false} >Ẩn</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning"
                            >
                                <i className="fas fa-plus mr-5"></i>
                                Lưu Lại
                                </button>&nbsp;
                                <button type='button' className="btn btn-danger"
                                onClick={this.onClear}
                            >
                                <i className="fas fa-times mr-5"></i>
                                Hủy Bỏ
                                </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}


const mapStatetoProps = state => ({
    isDisplayForm : state.isDisplayForm,
    taskEditing : state.taskEditing
});

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(TaskForm);
