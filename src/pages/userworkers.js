import React from 'react';
import APIService from './APIservice';
import App from '../App'
import axios from 'axios';
import Photocontainer from "./images";
import './inner.css';

class UserWorker extends React.Component{
    
    state = {
        details: [],
        user: "",
        contact: "",
        pay:"",
        occupation:"",
        exp:"",
        photos:"",
        num:""

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

    handleImageInput = (e) => {
        this.setState({
            photos : e.target.files
        })
    };

    fileInput=React.createRef();
  
    handleSubmit = (e) => {
        e.preventDefault();
  
        axios
            .post("http://localhost:8000/worker/", {
                name: this.state.user,
                phone_no:(this.state.contact),
                salary: (this.state.pay),
                Age:(this.state.exp),
                Role:this.state.occupation,
                photo:"",
               headers:{
                    'Content-Type':'multipart/form-data',
                    'Accept':'application/json',
                }
            })
            .then((res) => {
                this.setState({
                    user: "",
                    contact: "",
                    pay:"",
                    occupation:"",
                    exp:"",
                    photos:""

                });
            },

            )
            
            .catch((err) => {});
        };
            
    
    Delete(id,e) {
    e.preventDefault();
    axios.delete(`http://localhost:8000/worker/${id}`)
    .then(res => {console.log(res.data);
    const details=this.state.details.filter(details=> details.id!==id);
    this.setState({details});})
    .catch((err) => {});
    }

update(id,e) {
        e.preventDefault();
    
        axios.patch(`http://localhost:8000/worker/${id}`, {
            name: this.state.user,
            phone_no: this.state.contact,
            salary: this.state.pay,
            Age:this.state.exp,
            Role:this.state.occupation,
            photo:this.state.photos
            
    })
        .then(res => console.log(res.data));
    }

    /* deleteBtn = (workers) => {
        APIService.DeleteWorker(workers.id)
        .then(() => this.props.deleteBtn(workers) )
        .catch(error =>console.log(error))
     };*/

   /* editBtn = (this.props.worker) => {
        setEditWorker(this.props.worker)
     };*/


        
    
  
    render() {
        return (
            <div className="Worker">
             
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
                        <table className="table">
  <thead>
    <tr>
      <th scope="col">sr.no</th>
      <th scope="col">id</th>
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
      <th scope="row">{detail.id}</th>
      <td>{detail.name}</td>
      <td>{detail.phone_no}</td>
      <td>{detail.salary}</td>
      <td>{detail.Age}</td>
      <td>{detail.Role}</td>
      <td><img src={detail.photo} alt='display image' height="200" width="200"/></td>
    </tr>
    
  </tbody>
</table>
                       
                     


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

export default UserWorker;

            
        

        
    