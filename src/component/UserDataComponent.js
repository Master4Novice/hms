import React from 'react';
import {TableRow} from './TableRowComponent';

class UserDataComponent extends React.Component{

    removeThisModal() {
        this.props.removeModal();
    }

    render(){
        return(


                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-block">
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
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <input className="btn btn-outline-danger" type="button" defaultValue="Close" onClick={this.removeThisModal.bind(this)}/>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>

        );
    }
}

export default UserDataComponent;