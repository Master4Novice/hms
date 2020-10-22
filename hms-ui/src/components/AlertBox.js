import React from 'react';

class AlertBox extends React.Component{

    removeThisModal() {
        this.props.removeModal();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="text-primary">
                            {this.props.message}
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <input className="btn btn-outline-success" type="button" defaultValue="Close" onClick={this.removeThisModal.bind(this)}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default AlertBox;