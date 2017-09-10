import React, {Component}  from 'react';
export default class ModalComopnent extends Component {
    constructor(props) {
      super(props);
      this.state - {
        users: this.props.users
      }
      
    
      console.log('## MODAL DATA AND PROPS:', this.props);
    }
   
    removeThisModal() {
      this.props.removeModal();
    }
      
    render() {
      return (
        <div>
          <p>this is my modal</p>
          <table>
               <tbody>
                  {this.state.users.map((user, i) => <TableRow key = {i} 
                     data = {user} />)}
               </tbody>
            </table>
          <button type="button" onClick={this.removeThisModal.bind(this)}>close this modal</button>
        </div>
      );
    }
  }

  class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.username}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.emailId}</td>
          </tr>
       );
    }
 }