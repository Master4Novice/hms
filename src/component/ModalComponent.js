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
          
          <button type="button" onClick={this.removeThisModal.bind(this)}>close this modal</button>
        </div>
      );
    }
  }

  class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
          </tr>
       );
    }
 }