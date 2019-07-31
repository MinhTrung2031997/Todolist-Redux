import React, { Component } from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ConTrol from './components/ConTrol';
import { connect } from 'react-redux';
import * as actions from './actions/index';


class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         taskEditing: null,
         filter: {
            name: '',
            status: -1
         },
         keyword: '',
         sort: {
            by: '',
            status: 1
         }
      };
   }

   ChangeForm = () => {
      var { taskEditing } = this.props;
      if (taskEditing && taskEditing.id !== '') {
         this.props.onOpenForm();
      } else {
         this.props.onToggleForm();
      }
      this.props.onClearTask({
         id: '',
         name: '',
         status: false

      });
   }


   render() {



      var { isDisplayForm } = this.props;


      return (
         <div>
            <div className="container">
               <div className="title text-center">
                  <h1>Quản Lý Công Việc</h1>
                  <hr />
               </div>
               <div className="row">
                  <div className={isDisplayForm ? 'col-md-4' : ''}>
                     <TaskForm />
                  </div>
                  {/* thêm công việc */}
                  <div className={isDisplayForm ? 'col-md-8' : 'col-md-12'}>
                     <button type="button" className="btn btn-primary"
                        onClick={this.ChangeForm}
                     >
                        <span><i className="fas fa-plus mr-5"></i></span> Thêm Công Việc
                  </button>
                     <div className="row">
                        <ConTrol />
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-10">
                           <TaskList />
                        </div>

                     </div>
                  </div>
               </div>

               {/* right */}
            </div>
         </div>
      );
   }
}

const mapStatetoProps = state => {
   return {
      isDisplayForm: state.isDisplayForm,
      taskEditing: state.taskEditing
   };
};

const mapDispatchtoProps = (dispatch, props) => {
   return {
      onToggleForm: () => {
         dispatch(actions.toggleForm());
      },
      onClearTask: (task) => {
         dispatch(actions.updateTask(task));
      },
      onOpenForm :() =>{
         dispatch(actions.openForm());
     }
   };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
