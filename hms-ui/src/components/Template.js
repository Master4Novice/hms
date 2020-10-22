import React, { Component } from 'react';
import '../containers/App.css';

export default class Template extends Component{
    render(){
        return(
            <div className="container">
            <div className="row">
              <div className="col-md-12 twelveDiv">
                 <h2>12 </h2>
              </div>
            </div>
            <div className="row"><hr/></div>
            <div className="row">
              <div className="col-md-8 eightDiv">
                 <h2>8</h2>
              </div>
              <div className="col-md-4 fourDiv">
                 <h2>4</h2>
              </div>
            </div>
          </div>
        )
    }
}