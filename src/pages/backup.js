import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
  
class App extends React.Component {
    state = {
        details: [],
        user: "",
        contact: "",
        pay:""
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
  
    renderSwitch = (param) => {
        switch (param + 1) {
            case 1:
                return "primary ";
            case 2:
                return "secondary";
            case 3:
                return "success";
            case 4:
                return "danger";
            case 5:
                return "warning";
            case 6:
                return "info";
            default:
                return "yellow";
        }
    };
  
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
            })
            .then((res) => {
                this.setState({
                    user: "",
                    contact: "",
                    pay:"",
                });
            })
            .catch((err) => {});
    };
  
    render() {
        return (
            <div className="container jumbotron ">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                                {" "}
                                Author{" "}
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
                    </div>
  
                    <button type="submit" className="btn btn-primary mb-5">
                        Submit
                    </button>
                </form>
  
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
                            <div className={"bg-" + this.renderSwitch(id % 6) + 
                                          " card-header"}>worker {id + 1}  </div>
                            <div className="card-body">
                                <blockquote className={"text-" + this.renderSwitch(id % 6) + 
                                                   " blockquote mb-0"}>
                                    <h1> {detail.detail} </h1>
                                    <footer className="blockquote-footer">
                                        {" "}
                                        <cite title="Source Title">{detail.name} {detail.phone_no} {detail.salary} </cite>
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
export default App;
