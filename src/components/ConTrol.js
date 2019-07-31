import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';


class ConTrol extends Component {

    onSort = (a,b) =>{
        console.log(a,b);
    }
    render() {
        return (
            <div>

                <div className=" col-md-6 mt-5">
                    <Search  />
                </div>
                {/* Search */}

                <div className="col-md-6 ">
                    <Sort />
                </div>
                {/* Sort */}

            </div>
        );
    }
}

export default ConTrol;
