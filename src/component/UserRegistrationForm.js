import React from 'react';
import { Prompt } from 'react-router';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import '../containers/App';

class UserRegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            blockTransitions: false,
            name: '',
            username: '',
            password: '',
            emailId: '',
            contactNumber: ''
        }

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
                            <tr><td><span>Name</span></td><td><input name="name" type="text" className="form-control" aria-describedby="basic-addon1" value={this.props.name} onChange={this.onChange} /></td></tr>
                            <tr><td><span>User Name</span></td><td><input name="username" type="text" className="form-control" aria-describedby="basic-addon1" value={this.props.username} onChange={this.onChange} /></td></tr>
                            <tr><td><span>Password</span></td><td><input name="password" type="password" className="form-control" aria-describedby="basic-addon1" value={this.props.password} onChange={this.onChange} /></td></tr>
                            <tr><td><span>Email ID</span></td><td><input name="emailId" type="email" className="form-control" aria-describedby="basic-addon1" value={this.props.emailId} onChange={this.onChange} /></td></tr>
                            <tr><td><span>Contact No.</span></td><td><input name="contactNumber" type="number" className="form-control" aria-describedby="basic-addon1" value={this.props.contactNumber} onChange={this.onChange} /></td></tr>
                        </table>


                        <div>{this.props.status}</div>
                    </div>
                    <div className="col-md-4 fourDiv">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="New" onClick={this.submit} />
                            </div>
                            <div className="row"><hr/></div>
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="Save" onClick={this.submit} />
                            </div>
                            <div className="row"><hr/></div>
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="Delete" onClick={this.submit} />
                            </div>
                            <div className="row"><hr/></div>
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="Update" onClick={this.submit} />
                            </div>
                            <div className="row"><hr/></div>
                            <div className="row">
                                <input className="btn btn-primary" type="button" defaultValue="Get Data" onClick={this.submit} />
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
        name: state.userRegistration.name,
        username: state.userRegistration.username,
        password: state.userRegistration.password,
        emailId: state.userRegistration.emailId,
        contactNumber: state.userRegistration.contactNumber
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    navigateTo: (location) => {
        dispatch(push('/'))
    },
    updateForm: (key, value) => {
        dispatch( { type: "REGISTER_FORM_UPDATE", key, value });
    }
});

export default connect(state, mapDispatchToProps)(UserRegistrationForm);