import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import DisplayRecord from './displayRecord';
//import './doctor.css';
 
 class Doctor extends React.Component{

	    initComponents(){
           
           return (
                     <div>
                         <div className="container-fluid"><form>
                             <div className="row">
                                 <div className="col-md-12">
                                     <div className="card">
                                         <h3 className="card-header text-center">Doctor Profile</h3>
                                         <div className="card-block">
                                             <div className="card-block">
                                                <span className="border text-muted">
                                    <div className="row"><hr/></div>
                                      <div className="row">
                                         <div className="col-md-8 eightDiv border rounded-left divborder">
                                           <table className="table table-responsive tableUser">
                                             <thead></thead>
                                             <tbody>
                                               <tr><td><span className="text-muted">Id</span></td><td><input type="text" ref="id" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Name</span></td><td><input type="text" ref="name" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Father's name</span></td><td><input type="text" ref="fatherName" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Address</span></td><td><input type="text" ref="address" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Contact No.</span></td><td><input type="number" ref="contactNo" className="form-control" aria-describedby="basic-addon1" onBlur={(this.txtContactNoKeyTyped.bind(this))} placeholder="enter 10 digit number"/></td></tr>
                                               <tr><td><span className="text-muted">Email Id</span></td><td><input type="email" ref="email" className="form-control" aria-describedby="basic-addon1"  /></td></tr>
                                               <tr><td><span className="text-muted">Qualification</span></td><td><input type="text" ref="qualification" className="form-control" aria-describedby="basic-addon1"/></td></tr>
                                               <tr><td><span className="text-muted">Specialization</span></td><td><input type="text" ref="specialization" className="form-control" aria-describedby="basic-addon1"/></td></tr>
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
                                               <tr><td><span className="text-muted">Date Of Joining</span></td>
                                                   <td>
                                                       <input type="date" ref="doj"/>
                                                   </td>
                                               </tr>
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
                                                    <tr><td><input className="btn btn-outline-info btn-block" type="button" defaultValue="Get Data" onClick={this.props.jButton1ActionPerformed.bind(this)} /></td></tr>
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
                                         {

                                             this.props.doctor.doctorRecord!==undefined?
                                                 <div>
                                                     <h1>below is fetched record:</h1>
                                                     <table className="table table-responsive table-striped table-bordered">
                                                         <thead className="thead-inverse">
                                                         <tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Contact No</th><th>Email</th><th>Qualification</th><th>Specialization</th><th>DOJ</th></tr>
                                                         </thead>
                                                         <tbody>
                                                         {this.props.doctor.doctorRecord.list.map((record,index)=>{return <DisplayRecord key={index} data={record}/>})}</tbody></table></div>:<DisplayRecord/>


                                         }
                                     </div>
                                 </div>
                             </div>
                         </div>
           </div>);
                
        }
        txtContactNoKeyTyped(){
            
             let contactNo=this.refs.contactNo.value;
             
            console.log(this.refs.contactNo);
            if(contactNo.length<10){
              console.log('Entered Conatact number is not valid');
              //this.refs.contactNo.value=null;
              //ReactDOM.findDOMNode(this.refs.contactNo).focus()
 
            }
         }
        btnNewActionPerformed(){
            this.reset();
            
           }
           reset(){
               this.refs.id.value="";
               this.refs.name.value="";
               this.refs.fatherName.value="";
               this.refs.address.value="";
               this.refs.contactNo.value="";
               this.refs.email.value="";
               this.refs.qualification.value="";
               this.refs.specialization.value="";
               this.refs.gender.value="";
               this.refs.bloodGroup.value="";
               this.refs.doj.value=""
           }
        btnSaveActionPerformed(){
            //TODO ===validate call to check field
            console.log('calling validate');
            
            let jsonReq={
                id:this.refs.id.value,
                name:this.refs.name.value,
                fatherName:this.refs.fatherName.value,
                address:this.refs.address.value,
                contactNo:this.refs.contactNo.value,
                email:this.refs.email.value,
                qualification:this.refs.qualification.value,
                specialization:this.refs.specialization.value,
                gender:this.refs.gender.value, 
                bloodGroup:this.refs.bloodGroup.value,
                doj:this.refs.doj.value,
            }
           
            if(!this.validate()){
               return;
            }
            //make a API call to save data
             //let jsonstr=JSON.stringify(jsonReq);
             this.props.btnSaveActionPerformed(jsonReq,this);
             
        }
        validate(){
           
            if((!this.refs.id.value)||(this.refs.id.value===""))
                {
                    alert('Id is mandatory');
                    return false;
                }
            if((!this.refs.name.value)||(this.refs.name.value==="")){
                alert('Name is mandatory');
                return false;
            }
            if((!this.refs.fatherName.value)||(this.refs.fatherName.value==="")){
                alert('FatherName is mandatory');
                return false;
            }
            if((!this.refs.address.value)||(this.refs.address.value==="")){
                alert('Address is mandatory');
                return false;
            }
            if((!this.refs.contactNo.value)||(this.refs.contactNo.value==="")){
                alert('ContactNo is mandatory');
                return false;
            }
            if(this.refs.contactNo.value.length!==10){
               alert('Contact number not valid! Enter 10 digit');
               return false;
            }
            if((!this.refs.email.value)||(this.refs.email.value==="")){
                alert('Email is mandatory');
                return false;
            }
            if((!this.refs.qualification.value)||(this.refs.qualification.value==="")){
                alert('Qualification is mandatory');
                return false;
            }
            if((!this.refs.specialization.value)||(this.refs.specialization.value==="")){
                alert('Specialization is mandatory');
                return false;
            }
            if((!this.refs.gender.value)||(this.refs.gender.value==="")){
                alert('Gender is mandatory');
                return false;
            }
            if((!this.refs.bloodGroup.value)||(this.refs.bloodGroup.value==="")){
                alert('BloodGroup is mandatory');
                return false;
            }
            if((!this.refs.doj.value)||(this.refs.doj.value==="")){
                alert('DOJ is mandatory');
                return false;
            }
           return true;
        }
        btnDeleteActionPerformed(){
           if(this.refs.id.value){
            this.props.btnDeleteActionPerformed(this);

           }
           else{
               alert("please entered id");
           }
           //this.reset;
        }
        btnUpdateActionPerformed(){
            
            let jsonReq={
                id:this.refs.id.value,
                name:this.refs.name.value,
                fatherName:this.refs.fatherName.value,
                address:this.refs.address.value,
                contactNo:this.refs.contactNo.value,
                email:this.refs.email.value,
                qualification:this.refs.qualification.value,
                specialization:this.refs.specialization.value,
                gender:this.refs.gender.value,
                bloodGroup:this.refs.bloodGroup.value,
                doj:this.refs.doj.value
            }
            if(!this.validate()){
                return;
            }
            let jsonstr=JSON.stringify(jsonReq);
            console.log(jsonstr);
            this.props.btnUpdateActionPerformed(jsonReq,this);
        }
      
       

        render(){
            return this.initComponents();
            
        }
	    
	    
 }

 const mapStateToProps=(state)=>{
    return{
        doctor:state.doctor
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        
        jButton1ActionPerformed:()=>{
                 console.log("get doc record from server");
                 //need to call new component and in that component it will show all the doctor record in tabular form
             axios.get("http://localhost:6060/getdata")
             .then((response)=>{
                 console.log(response.data);




                 dispatch({
                    type:"GET_RECORD",
                    payload:{doctorRecord:response.data}
                });

             })
             .catch((err)=>{
                 console.log("error :"+err);
             })
                 
        },
        btnSaveActionPerformed:(jsonReq,thisRef)=>{
            console.log("new record saving");
            //let jsonstr=JSON.stringify(jsonReq);
           // const config = { headers: { 'Content-Type': 'multipart/form-data'} };
            
            axios.post('http://localhost:6060/save',jsonReq,{headers: {
                "Content-Type": "application/json"}
            })
            
            // axios({url:'http://localhost:8080/hms/rest/save',
            //      data:jsonReq,
            //      method:"post",
            //      responseType:"json"})
            .then((response)=>{
              
              if(response.data.status==="success"){
                alert("New Doctor record saved for Id :"+thisRef.refs.id.value);
                thisRef.reset();
              }
              else{
                 alert("Doctor record is already aviable with id :"+thisRef.refs.id.value);
              }              
                dispatch({
                    type:"SAVE_RECORD",
                    payload:{doctorRecord:response.data}
                });
            })
            .catch((err)=>{
               console.log("error while saving doctor data : "+err);
            });
        },
        btnDeleteActionPerformed:(thisRef)=>{
            let url="http://localhost:6060/delete?id="+thisRef.refs.id.value;
            axios.get(url)
            .then((response)=>{
                if(response.data.status==="success"){
                    alert("Doctor record deleted for id : "+thisRef.refs.id.value);
                    
                  }
                  else{
                     alert("Doctor record is not aviable for Id : "+thisRef.refs.id.value);
                  }
                
                dispatch({
                    type:"DELETE_RECORD",
                    payload:{doctorRecord:response.data}
                });

            })
            .catch((err)=>{
                console.log("error :"+err);
            })
        },
        btnUpdateActionPerformed:(jsonReq,thisRef)=>{
            console.log("record has been updated: "+jsonReq);
            //let jsonstr=JSON.stringify(jsonReq);
            
            axios.post('http://localhost:6060/update',jsonReq,{headers: {
                "Content-Type": "application/json"}
            })
            .then((response)=>{
              console.log(response.data);
              if(response.data.status==="success"){
                alert("Doctor record updated for Id : "+thisRef.refs.id.value);
                thisRef.reset();
              }
              else{
                 alert("Doctor record not avilable for Id : "+thisRef.refs.id.value);
              }
              
                dispatch({
                    type:"UPDATE_RECORD",
                    payload:{doctorRecord:response.data}
                });
            })
            .catch((err)=>{
               console.log("error while saving doctor data : "+err);
            });
        }


    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Doctor);