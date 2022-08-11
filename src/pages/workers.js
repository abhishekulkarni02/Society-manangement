import React from 'react';
import APIService from './APIservice';
import App from '../App'
import axios from 'axios';
import Photocontainer from "./images";
import pic from "./image1.jpg";
import './inner.css';

class Worker extends React.Component{
    
    state = {
        details: [],
        user: "",
        contact: "",
        pay:"",
        occupation:"",
        exp:"",
        photos:[],
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
                photo:this.state.photos
                
            })
            .then((res) => {
                this.setState({
                    user: "",
                    contact: "",
                    pay:"",
                    occupation:"",
                    exp:"",
                   

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
            phone_no:parseInt(this.state.contact),
            salary: parseInt(this.state.pay),
            Age:parseInt(this.state.exp),
            Role:this.state.occupation,
            
            
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


    showForm = () =>{
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
                        <textarea className="form-control" 
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
                                  value={this.state.exp} name="exp" 
                                  onChange={this.handleInput}>
                        </textarea>    
                        <input type="file" className="form-control" 
                               placeholder="Photo"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={this.state.photos} name="photo"
                               onChange={this.handleInput} />
                      
                    </div>

        
  
                    <button type="submit" className="btn btn-primary mb-5">
                        Submit
                    </button>
                </form>
              
               
            
        )
    }    
    
  
    render() {
        return (
            <div className='Worker'>

              <button className="btn btn-success" onClick={() => this.setState({showform:true})}>Insert Worker</button>
            {this.state.showform ? this.showForm() : null}   
             
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
      <td><img src={detail.photo} detail="Display image" height="200" width="200" /></td>
     
    </tr>
    
  </tbody>
</table>
                       
<button className="btn btn-primary" 
    onClick={() => this.setState({showupdateform:true})} >Update Worker</button>
                        <button className="btn btn-danger" onClick={(e) => this.Delete(detail.id,e)}>Delete Worker</button>
                        {this.state.showupdateform ? (
                                 <form onSubmit={(e) => this.Update(detail,e)}>
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
                                           value={detail.name} name="user"
                                           onChange={this.handleInput} />
                                    <textarea className="form-control" 
                                           placeholder="Contact"
                                           aria-label="Contact"
                                           aria-describedby="basic-addon1"
                                           value={detail.phone_no} name="contact"
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
                                              value={detail.salary} name="pay" 
                                              onChange={this.handleInput}>
                                    </textarea>
                                    <input type="text" className="form-control" 
                                           placeholder="Occupation"
                                           aria-label="Occupation"
                                           aria-describedby="basic-addon1"
                                           value={detail.Role} name="occupation"
                                           onChange={this.handleInput} />
                                    <textarea className="form-control " 
                                              aria-label="With textarea"
                                              placeholder="Age"
                                              value={detail.Age} name="exp" 
                                              onChange={this.handleInput}>
                                    </textarea>    
                                  
                                </div>
            
                    
              
                                <button type="submit" className="btn btn-primary mb-5">
                                    Submit
                                </button>
                            </form> 
                        ): null}  

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


