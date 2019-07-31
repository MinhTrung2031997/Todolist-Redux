import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index'


class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        };
    }

    onFilter = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.setState({
            [name]: value
        });

        this.props.onFilterTable(filter);
    }


    render() {

        var { tasks, filterTable,keyword,sort } = this.props;

        var filterStatus = parseInt(filterTable.status);

        if (filterTable.name) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
            });
        }

        if (keyword ) {
            tasks =  tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            });
        }
        tasks = tasks.filter((task) => {
            if (filterStatus === -1) {
                return task;
            } else {
                return task.status === (filterStatus === 1 ? true : false)
            }
        });

      if(sort){
         if(sort.by === 'sortName'){
            tasks.sort((a,b) =>{
             if(a.name > b.name) return sort.value;
             else if (a.name < b.name ) return -sort.value;
             else return 0;
            });
         }
         if(sort.by === 'sortStatus'){
            tasks.sort((a,b) =>{
             if(a.status > b.status) return -sort.value;
             else if (a.status < b.status ) return sort.value;
             else return 0;
            });
         }
      }
        var elmtasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
            
            />
        });
        return (
            <table className="table table-bordered table-hover " >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                name="filterName"
                                className="form-control"
                                onChange={this.onFilter}
                                
                            />
                        </td>
                        <td>

                            <select name="filterStatus"
                                className="form-control"
                                onChange={this.onFilter}
                                
                            >
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>

                        </td>
                        <td></td>
                    </tr>
                    {elmtasks}
                </tbody>
            </table >

        );
    }
}


const mapStatetoProps = state => {
    return {
        tasks: state.tasks,
        filterTable : state.filterTable,
        keyword: state.searchTable,
        sort : state.sortTable
    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTable(filter));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TaskList);
