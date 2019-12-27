import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Form, Field } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300)
  alert(JSON.stringify(values, 0, 2));
};

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
            ...this.state,
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
            ...this.state,
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
            ...this.state,
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
            <Form 
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                   <div>
                       <form>
                            <Grid container spacing={3} >
                                <Grid item xs={12} >
                                    <Grid container spacing={3} >
                                        <Grid item xs={4} >
                                            <label>Name</label>
                                            <Field
                                              name="name"
                                              component="input"
                                              type="text"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} >
                                        <Grid item xs={4} >
                                            <label>User Name</label>
                                            <Field
                                              name="username"
                                              component="input"
                                              type="text"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} >
                                        <Grid item xs={2} >
                                            <label>Password</label>
                                            <Field
                                              name="password"
                                              component="input"
                                              type="password"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} >
                                        <Grid item xs={2} >
                                            Email ID
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} >
                                        <Grid item xs={2} >
                                            <label>Contact No</label>
                                            <Field
                                              name="contactNumber"
                                              component="input"
                                              type="number"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>                                                             
                            <table className="table table-responsive">
                                <thead></thead>
                                <tbody>
                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="New" onClick={this.newUserData.bind(this)}/></td></tr>
                                    <tr><td><input className="btn btn-outline-info btn-block" type="submit" defaultValue="Save" /></td></tr>
                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Delete" onClick={this.deleteUserData.bind(this)} /></td></tr>
                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Update" onClick={this.updateUserData.bind(this)} /></td></tr>
                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Get Data" onClick={this.getUserData.bind(this)} /></td></tr>
                                </tbody>
                            </table>                                   
                        </form>
                    </div>
                )}
            />
        )
    }
}

export default UserRegistrationForm;