import React from 'react';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import '../containers/App';
import {getDataAction,saveUserDataAction,updateUserDataAction,deleteUserDataAction} from '../actions/userRegistration';

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

        this.baseState = this.state;
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    onChange(e) {
        this.setState({blockTransitions: true });
        this.props.updateForm(e.target.name, e.target.value);
    }

    submit() {
        this.setState({
            blockTransitions: false,
            status:'Thank you, your application has been submitted.'
        }, () => {
            this.props.navigateTo('/');
        });
    }

    reset(){
        this.setState(this.baseState);
    }

    getUserData() {
        this.props.getDataAction();

    }

   // validateField(){
   //     let name = this.state.name;
   //     let username = this.state.username;
   //     let emailId = this.state.emailId;
   //     let password = this.state.password;
   //     let contactNumber = this.state.contactNumber;

   //     if(name.length=0 || name == "" || name === null || name == null){
   //         prompt("Please enter name");
   //         return false;
   //     }
   //     return true;
   // }

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

    render() {
        return (
            <div className="container-fluid"><form>
                <div className="row">
                    <div className="col-md-12 twelveDiv">
                        <h2 className="text-center text-default">User Registration</h2>
                    </div>
                </div>
                <div className="row"><hr/></div>
                <div className="row">
                    <div className="col-md-8 eightDiv">
                        <table className="table table-responsive tableUser">
                            <thead></thead>
                            <tbody>
                            <tr><td><span>Name</span></td><td><input name="name" type="text" className="form-control" aria-describedby="basic-addon1" value={this.props.name} onChange={this.onChange}/></td></tr>
                            <tr><td><span>User Name</span></td><td><input name="username" type="text" className="form-control" aria-describedby="basic-addon1" value={this.props.username} onChange={this.onChange} /></td></tr>
                            <tr><td><span>Password</span></td><td><input name="password" type="password" className="form-control" aria-describedby="basic-addon1" value={this.props.password} onChange={this.onChange} /></td></tr>
                            <tr><td><span>Email ID</span></td><td><input name="emailId" type="email" className="form-control" aria-describedby="basic-addon1" value={this.props.emailId} onChange={this.onChange} /></td></tr>
                            <tr><td><span>Contact No.</span></td><td><input name="contactNumber" type="number" className="form-control" aria-describedby="basic-addon1" value={this.props.contactNumber} onChange={this.onChange} /></td></tr>
                            </tbody>
                        </table>
                        <div className="text-danger">{this.props.status}</div>
                    </div>
                    <div className="col-md-4 fourDiv">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="New" onClick={this.reset.bind(this)}/>
                            </div>
                            <div className="row"><hr/></div>
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="Save" onClick={this.saveUserData.bind(this)} />
                            </div>
                            <div className="row"><hr/></div>
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="Delete" onClick={this.deleteUserData.bind(this)} />
                            </div>
                            <div className="row"><hr/></div>
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="Update" onClick={this.updateUserData.bind(this)} />
                            </div>
                            <div className="row"><hr/></div>
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="Get Data" onClick={this.getUserData.bind(this)} />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
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
        dispatch(push('/'))
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
    }
});

export default connect(state, mapDispatchToProps)(UserRegistrationForm);