import React from 'react';

export class TableRow extends React.Component {
    constructor(props){
        super(props);
        console.log("TableRow -> constructor -> ",this.props)
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.username}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.emailId}</td>
                <td>{this.props.data.contactNumber}</td>
            </tr>
        );
    }
}