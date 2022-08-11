import React from 'react';
import axios from "axios";
import { render } from '@testing-library/react';

class InsertWorker extends React.Component{

    constructor(props){
        super(props);
        state ={
        details:[],
        user :"",
        contact :"",
        pay :"",
        occupation :"",
        exp :"",
        photos :[]

    };}




    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
  
    handleSubmit = (e) => {
        e.preventDefault();
  
        axios
            .post("http://localhost:8000/worker/", {
                name:this.state.user,
                phone_no :this.state.contact,
                salary:this.state.pay,
                age :this.state.exp,
                role :this.state.occupation,
                photo:this.state.photos
            })
            .then((res) => {
                this.setState({
                    user: "",
                    contact: "",
                    pay:"",
                    occupation:"",
                    exp:"",
                    photos:[]

                });
            })
            .catch((err) => {});
    };
  
    render(){
    return(
    <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                                {" "}
                                {" "}
                            </span>
                        </div>
                        <input type="text" className="form-control" 
                               placeholder="Name of the Worker"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={this.state.user} name="user"
                               onChange={this.handleInput} />
                        <input type="text" className="form-control" 
                               placeholder="Contact"
                               aria-label="Contact"
                               aria-describedby="basic-addon1"
                               value={this.state.contact} name="contact"
                               onChange={this.handleInput} />       
                    </div>
  
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                              
                            </span>
                        </div>
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Salary"
                                  value={this.state.pay} name="pay" 
                                  onChange={this.handleInput}>
                        </textarea>
                        <input type="text" className="form-control" 
                               placeholder="Occupation"
                               aria-label="Occupation"
                               aria-describedby="basic-addon1"
                               value={this.state.occupation} name="occupation"
                               onChange={this.handleInput} />
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Age"
                                  value={this.state.age} name="Age" 
                                  onChange={this.handleInput}>
                        </textarea>    
                        
                    </div>
  
                    <button type="submit" className="btn btn-primary mb-5">
                        Submit
                    </button>
                </form>
  
               
    )
}
}

export default InsertWorker;

   

//<button className="btn btn-success" onClick={() => <InsertWorker/>}>Insert worker</button>