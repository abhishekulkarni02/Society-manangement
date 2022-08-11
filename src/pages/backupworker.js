import React from "react";
import axios from "axios";
import Photocontainer from "./images";
import InsertWorker from "./insertworkers";
import UpdateWorker from "./updatedata";
import APIService from "./APIservice";



class Worker extends React.Component{
    
    state = {
        details: [],
        user: "",
        contact: "",
        pay:"",
        occupation:"",
        exp:"",
        photos:[]

    };

  
    componentDidMount() {
        let data;
  
        axios
            .get("http://localhost:8000/worker/")
            .then((res) => {
                data = res.data;
                this.setState({
                    details: data,
                });
            })
            .catch((err) => {});
    }
  
    
  
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
  
    handleSubmit = (e) => {
        e.preventDefault();
  
        axios
            .post("http://localhost:8000/worker/", {
                name: this.state.user,
                phone_no: this.state.contact,
                salary: this.state.pay,
                Age:this.state.exp,
                Role:this.state.occupation,
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

     deleteBtn = (workers) => {
        APIService.DeleteWorker(workers.id)
        .then(() => this.props.deleteBtn(workers) )
        .catch(error =>console.log(error))
     };

   /* editBtn = (this.props.worker) => {
        setEditWorker(this.props.worker)
     };*/
        
    
  
    render() {
        return (
            <div className="container jumbotron ">
            <button className="btn btn-success" onClick={() => <InsertWorker/>}>Insert worker</button>
              
                <hr
                    style={{
                        color: "#000000",
                        backgroundColor: "#000000",
                        height: 0.5,
                        borderColor: "#000000",
                    }}
                />
                {this.state.details.map((detail, id) => (
    <div key={id}>
        <div className="card shadow-lg">
            <div className={"bg-" + 
                          " card-header"}>worker {id + 1}  </div>
            <div className="card-body">
                <blockquote className={"text-" + 
                                   " blockquote mb-0"}>
                    <h1> {detail.detail} </h1>
                    <footer className="blockquote-footer">
                        {" "}
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">sr.no</th>
      <th scope="col">name</th>
      <th scope="col">phone_no</th>
      <th scope="col">salary</th>
      <th scope="col">Age</th>
      <th scope="col">Role</th>
      <th scope="col">Photo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{id+1}</th>
      <td>{detail.name}</td>
      <td>{detail.phone_no}</td>
      <td>{detail.salary}</td>
      <td>{detail.Age}</td>
      <td>{detail.Role}</td>
      <td><Photocontainer photos ={this.state.photos}/><img src={detail.photo} alt='display image' height="200" width="200"/></td>
    </tr>
    
  </tbody>
</table>
                       
                        <button className="btn btn-primary" onClick={() => editBtn(worker)}>Update Worker</button>
                        <button className="btn btn-danger">Delete Worker</button>


                    </footer>
                </blockquote>
            </div>
        </div>
        <span className="border border-primary "></span>
    </div>
))}
    
               
            </div>
        );
    }
}

export default Worker;

