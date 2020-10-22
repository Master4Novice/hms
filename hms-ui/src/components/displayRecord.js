import React from 'react';

export default class DisplayRecord extends React.Component{
    render(){
        console.log("child component");
        return(
           
               this.props.data!==undefined?<tr><td>{this.props.data.id}</td><td>{this.props.data.name}</td><td>{this.props.data.fatherName}</td><td>{this.props.data.contactNo}</td>
               <td>{this.props.data.email}</td><td>{this.props.data.qualification}</td><td>{this.props.data.specialization}</td><td>{this.props.data.doj}</td></tr>:<h1>No Record</h1>
               
         

        );
    }
}