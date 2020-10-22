import 'babel-polyfill';
import React from "react";
import {connect} from 'react-redux';


class PatientDetails extends React.Component {
    render(){

        if( (this.props.patients.patients.length < 1)){
            return <div></div>
        }else{

            console.log(this.props.patients.patients[0].name);
            const listItems = this.props.patients.patients.map((patient,index) =>
                    <tr key={index}><td>{patient.patientId}</td><td>{patient.name}</td><td>{patient.address}</td><td>{patient.age}</td><td>{patient.contactNo}</td></tr>
                //<li>{patient.name}</li>
            );

           // const mappedTweet = this.props.patient.patients.map(pat => <li>{pat.name}</li>)
        return (
            <div>
                <table className="table table-responsive table-striped table-bordered">
                    <thead className="thead-inverse">
                        <tr><th>Patient Id</th><th>Name</th><th>Address</th><th>Age</th><th>ContactNo</th></tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
           </div>);
        }

}
}

function mapStateToProps(store){
    return {
        patients: store.patients
    }
}

export default connect(mapStateToProps)(PatientDetails);