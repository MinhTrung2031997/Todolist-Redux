import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
        this.props.onSearchTable(this.state.keyword);
    }
    render() {

        return (
            <div>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        name="keyword"
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">

                        <button type="submit" className="btn btn-primary"
                            onClick={this.onSearch}
                        >
                            <i className="fas fa-search mr-5"></i>
                            Tìm</button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => ({

});

const mapDispatchtoProps = (dispatch, props) => ({
    onSearchTable: (keyword) => {
        dispatch(actions.searchTable(keyword))
    }
});


export default connect(mapStatetoProps, mapDispatchtoProps)(Search);