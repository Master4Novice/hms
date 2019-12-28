import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReplayIcon from '@material-ui/icons/Replay';

import { Form, Field } from 'react-final-form';
 
import { HMTextField } from '../../wrappers';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300)
  alert(JSON.stringify(values, 0, 2));
};

const required = value => (value ? undefined : 'Required');

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
              render={({ handleSubmit, form, submitting, pristine }) => (
                   <div>
                       <form onSubmit={handleSubmit}>
                            <Grid container spacing={3} >
                                <Grid item xs={12} >
                                    <Grid container spacing={3} >
                                        <Grid item xs={3} >
                                            <Field
                                              name="name"
                                              label="Name"
                                              component={HMTextField}
                                              type="text"
                                              validate={required}
                                            />
                                        </Grid>
                                        <Grid item xs={3} >
                                            <Field
                                              name="emailId"
                                              label="Email ID"
                                              component={HMTextField}
                                              type="text"
                                              validate={required}
                                            />
                                        </Grid>
                                        <Grid item xs={3} >
                                            <Field
                                              name="contactNumber"
                                              label="Contact Number"
                                              component={HMTextField}
                                              type="number"
                                              validate={required}
                                            />
                                        </Grid>
                                    </Grid>                               
                                    <Grid container spacing={3} >
                                        <Grid item xs={3} >
                                            <Field
                                              name="username"
                                              label="User Name"
                                              component={HMTextField}
                                              type="text"
                                              validate={required}
                                            />
                                        </Grid>
                                        <Grid item xs={3} >
                                            <Field
                                              name="password"
                                              label="Password"
                                              component={HMTextField}
                                              type="password"
                                              validate={required}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} >
                                        <Grid item xs={1} >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit" 
                                                disabled={submitting}
                                                endIcon={<AddCircleIcon />}
                                            >
                                                Add
                                            </Button>
                                        </Grid>
                                        <Grid item xs={1} >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={form.reset}
                                                disabled={submitting || pristine}
                                                endIcon={<ReplayIcon />}
                                            >
                                                Reset
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>                                                                                                
                        </form>
                    </div>
                )}
            />
        )
    }
}

export default UserRegistrationForm;