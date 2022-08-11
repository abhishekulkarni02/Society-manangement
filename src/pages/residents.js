import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import './inner.css';
  
class Residents extends React.Component {

    /*navigate=useNavigate()

    Sendmsg = () =>
    {
        this.navigate("http://http://localhost:8000/resident/sendmsg/")
    }*/
     
    state = {
        details: [],
        user: "",
        residence: "",
        due:"",
        mail:"",
        num:"",
        showform:false,
        showupdateform:false,
    };
  
    componentDidMount() {
        let data;
  
        axios
            .get("http://localhost:8000/resident/")
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
            .post("http://localhost:8000/resident/", {
                name: this.state.user,
                flat_no: this.state.residence,
                pending_maintainance: this.state.due,
                email: this.state.mail
            })
            .then((res) => {
                this.setState({
                    user: "",
                    contact: "",
                    pay:"",
                    mail:""
                });
            })
            .catch((err) => {});
    };

    Delete(id,e) {
        e.preventDefault();
        axios.delete(`http://localhost:8000/resident/${id}`)
        .then(res => {console.log(res.data);
        const details=this.state.details.filter(details=> details.id!==id);
        this.setState({details});})
        .catch((err) => {});
        }

        showForm=() => {
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
                           placeholder="Resident"
                           aria-label="Username"
                           aria-describedby="basic-addon1"
                           value={this.state.user} name="user"
                           onChange={this.handleInput} />
                    <input type="text" className="form-control" 
                           placeholder="Flat_no"
                           aria-label="Contact"
                           aria-describedby="basic-addon1"
                           value={this.state.residence} name="residence"
                           onChange={this.handleInput} />       
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                          
                        </span>
                    </div>
                    <textarea className="form-control " 
                              aria-label="With textarea"
                              placeholder="Pending_maintainanace"
                              value={this.state.due} name="due" 
                              onChange={this.handleInput}>
                    </textarea>
                    <textarea className="form-control " 
                              aria-label="With textarea"
                              placeholder="email"
                              value={this.state.mail} name="mail" 
                              onChange={this.handleInput}>
                    </textarea>
                </div>

                <button type="submit" className="btn btn-primary mb-5">
                    Submit
                </button>
            </form>

            

            )
        }
  
    render() {
        return (
            <div className="Worker ">
              <button className="btn btn-success" onClick={() => this.setState({showform:true})}>Insert Resident</button>
            {this.state.showform ? this.showForm() : null}    
          
  
                {this.state.details.map((detail, id) => (
                    <div key={id}>
                        <div className="card shadow-lg">
                            <div className={"bg-" +  
                                          " card-header"}>resident {id + 1}  </div>
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
      <th scope="col">name</th>
      <th scope="col">flat_no</th>
      <th scope="col"> pending_maintainance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{id+1}</th>
      <td>{detail.name}</td>
      <td>{detail.flat_no}</td>
      <td>{detail.pending_maintainance}</td>
    </tr>
    
  </tbody>
</table>

<button className="btn btn-primary" 
    onClick={() => this.setState({showupdateform:true})} >Update Resident</button>
                        <button className="btn btn-danger" onClick={(e) => this.Delete(detail.id,e)}>Delete Resident</button>
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
                                         placeholder="Resident"
                                         aria-label="Username"
                                         aria-describedby="basic-addon1"
                                         value={detail.name} name="user"
                                         onChange={this.handleInput} />
                                  <input type="text" className="form-control" 
                                         placeholder="Flat_no"
                                         aria-label="Contact"
                                         aria-describedby="basic-addon1"
                                         value={detail.flat_no} name="residence"
                                         onChange={this.handleInput} />       
                              </div>
              
                              <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        
                                      </span>
                                  </div>
                                  <textarea className="form-control " 
                                            aria-label="With textarea"
                                            placeholder="Pending_maintainanace"
                                            value={detail.pending_maintainance} name="due" 
                                            onChange={this.handleInput}>
                                  </textarea>
                                  <textarea className="form-control " 
                                            aria-label="With textarea"
                                            placeholder="email"
                                            value={detail.email} name="mail" 
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
export default Residents;