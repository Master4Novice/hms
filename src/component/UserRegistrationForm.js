import React from 'react';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import '../containers/App';
import { getDataAction,
         saveUserDataAction,
         updateUserDataAction,
         deleteUserDataAction,
         newUserDataAction
       } from '../actions/userRegistration';

class UserRegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            blockTransitions: false,
            status:'',
            name: '',
            username: '',
            password: '',
            emailId: '',
            contactNumber: '',
            user:{
                name:'',
                username:'',
                password:'',
                emailId:'',
                contactNumber:''
            },
            users:[]
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({blockTransitions: true });
        this.props.updateForm(e.target.name, e.target.value);
    }

    getUserData() {
        this.props.getDataAction();
    }

    saveUserData(){
        this.setState({
            ...state,
            user:{
                name:this.props.name,
                username:this.props.username,
                password:this.props.password,
                emailId:this.props.emailId,
                contactNumber:this.props.contactNumber
            }
        });
        this.props.saveUserDataAction(this.props.user);
    }

    updateUserData(){
        this.setState({
            ...state,
            user:{
                name:this.props.name,
                username:this.props.username,
                password:this.props.password,
                emailId:this.props.emailId,
                contactNumber:this.props.contactNumber
            }
        });
        this.props.updateUserDataAction(this.props.user);
    }

    deleteUserData(){
        this.setState({
            ...state,
            user:{
                name:this.props.name,
                username:this.props.username,
                password:this.props.password,
                emailId:this.props.emailId,
                contactNumber:this.props.contactNumber
            }
        });
        this.props.deleteUserDataAction(this.props.username);
    }

    newUserData(){
        this.setState({
            blockTransitions: false,
            status:'Thank you, your application has been submitted.'
        }, () => {
            this.props.newUserDataAction();
            this.props.navigateTo('/users/registration');
        });
    }

    render() {
        return (
            <div className="container-fluid"><form>
                <div className="row">
                   <div className="col-md-12">
                       <div className="card">
                          <h3 className="card-header text-center">User Registration</h3>
                          <div className="card-block">                             
                                  <span className="border text-muted">
                                    <div className="row"><hr/></div>
                                      <div className="row">
                                         <div className="col-md-8 eightDiv border rounded-left divborder">
                                           <table className="table table-responsive tableUser">
                                             <thead></thead>
                                             <tbody>
                                               <tr><td><span className="text-muted">Name</span></td><td><input name="name" type="text" className="form-control" aria-describedby="basic-addon1" value={this.props.name} onChange={this.onChange}/></td></tr>
                                               <tr><td><span className="text-muted">User Name</span></td><td><input name="username" type="text" className="form-control" aria-describedby="basic-addon1" value={this.props.username} onChange={this.onChange} /></td></tr>
                                               <tr><td><span className="text-muted">Password</span></td><td><input name="password" type="password" className="form-control" aria-describedby="basic-addon1" value={this.props.password} onChange={this.onChange} /></td></tr>
                                               <tr><td><span className="text-muted">Email ID</span></td><td><input name="emailId" type="email" className="form-control" aria-describedby="basic-addon1" value={this.props.emailId} onChange={this.onChange} /></td></tr>
                                               <tr><td><span className="text-muted">Contact No.</span></td><td><input name="contactNumber" type="number" className="form-control" aria-describedby="basic-addon1" value={this.props.contactNumber} onChange={this.onChange} /></td></tr>
                                             </tbody>
                                           </table>
                                         </div>                                  
                                      <div className="col-md-4 eightDiv border rounded-right divborder">                                       
                                            <table className="table table-responsive">
                                                <thead></thead>
                                                <tbody>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="New" onClick={this.newUserData.bind(this)}/></td></tr>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Save" onClick={this.saveUserData.bind(this)} /></td></tr>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Delete" onClick={this.deleteUserData.bind(this)} /></td></tr>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Update" onClick={this.updateUserData.bind(this)} /></td></tr>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Get Data" onClick={this.getUserData.bind(this)} /></td></tr>
                                                </tbody>
                                            </table> 
                                      </div>                                     
                                    </div>
                                </span>
                          </div>
                       </div>
                   </div>
                </div>               
            </form>
            </div>
        )
    }
}

const state = (state, ownProps = {}) => {
    return {
        name:state.userRegistration.name,
        username:state.userRegistration.username,
        password:state.userRegistration.password,
        emailId:state.userRegistration.emailId,
        contactNumber:state.userRegistration.contactNumber,
        user:{
            name:state.userRegistration.name,
            username:state.userRegistration.username,
            password:state.userRegistration.password,
            emailId:state.userRegistration.emailId,
            contactNumber:state.userRegistration.contactNumber,
        },
        status:state.userRegistration.status,
        users:state.userRegistration.users
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    navigateTo: (location) => {
        dispatch(push(location))
    },
    updateForm: (key, value) => {
        dispatch( { type: "REGISTER_FORM_UPDATE", key, value });
    },
    getDataAction : () =>{
        dispatch(getDataAction());
    },
    saveUserDataAction : (user) =>{
        dispatch(saveUserDataAction(user));
    },
    updateUserDataAction : (user) =>{
        dispatch(updateUserDataAction(user));
    },
    deleteUserDataAction : (username) =>{
        dispatch(deleteUserDataAction(username));
    },
    newUserDataAction : () =>{
        dispatch(newUserDataAction());
    }
});



export default connect(state, mapDispatchToProps)(UserRegistrationForm);