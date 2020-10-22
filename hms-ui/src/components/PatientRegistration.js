import 'babel-polyfill';
import React from "react";
import {connect} from 'react-redux';
import PatientDetails from './PatientDetails';

import {fetchPatient,savePatient,updatePatient,deletePatient} from "../actions/patientRegistrationActions";

class PatientRegistration extends React.Component {

    render(){
        this.initComponents()
        return <div>
            {this.initComponents()}
        </div>
    }

   btnNewActionPerformed(){
    this.refs.patientId.value = '';
    this.refs.name.value = '';
    this.refs.fatherName.value = '';
    this.refs.address.value = '';
    this.refs.contactNo.value = '';
    this.refs.emailId.value = '';
    this.refs.age.value = '';
    this.refs.gender.value = '';
    this.refs.bloodGroup.value = '';
    this.refs.remarks.value = ''
    }

    btnSaveActionPerformed(){
    console.log(this.refs.name.value);
        this.props.dispatch(savePatient(this.refs.patientId.value,this.refs.name.value,this.refs.fatherName.value,this.refs.address.value,this.refs.contactNo.value,this.refs.emailId.value,this.refs.age.value,this.refs.gender.value,this.refs.bloodGroup.value,this.refs.remarks.value));
        setTimeout(()=>{
            console.log("The msg=",this.props.saveMsg);
        },5000)

    }
    btnDeleteActionPerformed(){
        this.props.dispatch(deletePatient(this.refs.patientId.value));
        setTimeout(()=>{

        },5000)

    }
    btnUpdateActionPerformed(){
        this.props.dispatch(updatePatient(this.refs.patientId.value,this.refs.name.value,this.refs.fatherName.value,this.refs.address.value,this.refs.contactNo.value,this.refs.emailId.value,this.refs.age.value,this.refs.gender.value,this.refs.bloodGroup.value,this.refs.remarks.value));
        setTimeout(()=>{

        },5000)

    }

    btnGetDataActionPerformed(){
        this.props.dispatch(fetchPatient());
        setTimeout(()=>{
           /* console.log("PATIENT ARE for =",this.props);
            console.log("PATIENTS IS for =",this.props.patients.patients[0].name)*/
        },5000)

    }

    initComponents(){
    return(
            <div>

                <div className="container-fluid"><form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <h3 className="card-header text-center">Patient Details</h3>
                                <div className="card-block">
                                    <div className="card-block">
                                                <span className="border text-muted">
                                    <div className="row"><hr/></div>
                                      <div className="row">
                                         <div className="col-md-8 eightDiv border rounded-left divborder">
                                           <table className="table table-responsive tableUser">
                                             <thead></thead>
                                             <tbody>
                                               <tr><td><span className="text-muted">Patient ID</span></td><td><input type="text" ref="patientId" name="patientId" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Name</span></td><td><input type="text" ref="name" name="name" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Father's name</span></td><td><input type="text" ref="fatherName" name="fatherName" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Address</span></td><td><input type="text" ref="address" name="address" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Contact No.</span></td><td><input type="text" ref="contactNo" name="contactNo" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Email Id</span></td><td><input type="email" ref="emailId" name="emailId" className="form-control" aria-describedby="basic-addon1"  /></td></tr>
                                               <tr><td><span className="text-muted">Age</span></td><td><input type="text" ref="age"  name="age" className="form-control" aria-describedby="basic-addon1"  /></td></tr>
                                               <tr><td><span className="text-muted">Gender</span></td>
                                                   <td>
                                                       <select className="custom-select" ref="gender">
                                                            <option value="">select value</option>
                                                            <option value="F">F</option>
                                                            <option value="M">M</option>
                                                        </select>
                                                   </td>
                                               </tr>
                                               <tr><td><span className="text-muted">Blood Group</span></td>
                                                   <td>
                                                       <select className="custom-select" ref="bloodGroup">
                                                            <option value="">select value</option>
                                                            <option value="O+">O+</option>
                                                            <option value="O-">O-</option>
                                                            <option value="A+">A+</option>
                                                            <option value="A-">A-</option>
                                                            <option value="B+">B+</option>
                                                            <option value="B-">B-</option>
                                                            <option value="AB+">AB+</option>
                                                            <option value="AB-">AB-</option>
                                                        </select>
                                                   </td>
                                               </tr>
                                               <tr><td><span className="text-muted">Remarks</span></td><td><textarea rows="4" cols="25" ref="remarks" name="remarks" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                             </tbody>
                                           </table>
                                         </div>
                                      <div className="col-md-4 eightDiv border rounded-right divborder">
                                            <table className="table table-responsive">
                                                <thead></thead>
                                                <tbody>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="New" onClick={this.btnNewActionPerformed.bind(this)}/></td></tr>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Save" onClick={this.btnSaveActionPerformed.bind(this)} /></td></tr>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Delete" onClick={this.btnDeleteActionPerformed.bind(this)} /></td></tr>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Update" onClick={this.btnUpdateActionPerformed.bind(this)} /></td></tr>
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Get Data" onClick={this.btnGetDataActionPerformed.bind(this)} /></td></tr>
                                                </tbody>
                                            </table>
                                      </div>
                                    </div>
                                </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
                <div className="col-md-12">
                    <div className="text-center">
                        <div className="card">
                            <div className="card-block">
                                <PatientDetails/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store){
    return {

        patients: store.patients
     //   saveMsg: store.saveMsg

    }
}

export default connect(mapStateToProps)(PatientRegistration);
