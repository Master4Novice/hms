import React from 'react';
import {TableRow} from './TableRowComponent';
//import {connect} from 'react-redux';

class UserDataComponent extends React.Component{
    constructor(props){
        super(props);
        console.log("UserDataComponent -> constructor -> ",this.props.users);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                     <table className="table table-responsive table-striped table-bordered">
                            <thead className="thead-inverse">
                            <tr>
                                <th>Username</th><th>Name</th><th>Email Id</th><th>Contact No.</th>
                            </tr>
                            </thead>
                            <tbody>
                                 {
                                     this.props.users.map((user, i) =>
                                         <TableRow key = {i} data = {user} />)
                                 }
                            </tbody>
                     </table>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <input className="btn btn-outline-danger" type="button" defaultValue="Close" onClick={this.removeThisModal.bind(this)}/>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default UserDataComponent;