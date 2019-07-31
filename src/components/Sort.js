import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';


class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: '',
                status: 1
            }
        }
    }


    onSort = (sortBy, sortValue) => {
        var sort = {
            name: sortBy,
            status : sortValue
        }
        this.props.onSortTable(sort);
        this.setState({
            sort: {
                by: sortBy,
                status: sortValue
            }
        });
    }
    render() {
        var { sort } = this.state;
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle mt-15" type="button" data-toggle="dropdown">
                        Sắp Xếp
                        <i className="far fa-caret-square-down ml-5"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li
                            onClick={() => this.onSort('sortName', 1)}
                            className={(sort.by === 'sortName' && sort.status === 1) ? 'sort_selected' : ''}
                        >
                            <a role="button">
                                <i className="fas fa-sort-alpha-down sort" ></i>
                                <span className="ml-10">Tên A-Z </span> </a>
                        </li>
                        <li
                            className={(sort.by === 'sortName' && sort.status === -1) ? 'sort_selected' : ''}
                            onClick={() => this.onSort('sortName', -1)}>
                            <a role="button">
                                <i className="fas fa-sort-alpha-down-alt sort"></i>
                                <span className="ml-10">Tên Z-A </span> </a>
                        </li>
                        <li className="divider"></li>
                        <li
                            className={(sort.by === 'sortStatus' && sort.status === 1) ? 'sort_selected' : ''}
                            onClick={() => this.onSort('sortStatus', 1)}
                        ><a role="button">Trạng Thái Kích Hoạt</a></li>
                        <li
                            className={(sort.by === 'sortStatus' && sort.status === -1) ? 'sort_selected' : ''}
                            onClick={() => this.onSort('sortStatus', -1)}
                        ><a role="button">Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
            </div>



        );
    }
}

const mapStatetoProps = state => ({

});

const mapDispatchtoProps = (dispatch, props) => ({
    onSortTable: (sort) => {
        dispatch(actions.sortTable(sort))
    }
})

export default connect(mapStatetoProps,mapDispatchtoProps) (Sort);
