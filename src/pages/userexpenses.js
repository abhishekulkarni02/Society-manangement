import React from "react";
import axios from "axios";
import './inner.css';

  
class UserExpenses extends React.Component {
    state = {
        details: [],
        spent: "",
        value: "",
        num:"",
        up:"",
        showform: false,
        showupdateform:false,
    
            };
  
    componentDidMount() {
        let data;
  
        axios
            .get("http://localhost:8000/expense/")
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
            .post("http://localhost:8000/expense/", {
                reason: this.state.spent,
                expenditure: this.state.value,
            })
            .then((res) => {
                this.setState({
                    spent: "",
                    value:"",
                });
            })
            .catch((err) => {});
    };

    Delete(id,e) {
        e.preventDefault();
        axios.delete(`http://localhost:8000/expense/${id}/`)
        .then(res => {console.log(res.data);
        const details=this.state.details.filter(details=> details.id!==id);
        this.setState({details});})
        .catch((err) => {});
        }

        Changeup = (e,id) =>{
            this.setState({
                up:id
            })
        };

        Update(detail,e) {
            e.preventDefault();
  
            axios
                .put(`http://localhost:8000/expense/${detail.id}/`, {
                    reason: detail.reason,
                    expenditure: detail.expenditure,
                })
                .then((res) => {
                    this.setState({
                        spent: "",
                        value:"",
                    });
                })
                .catch((err) => {});
        }

        showForm = () => {
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
                               placeholder="Reason"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={this.state.spent} name="spent"
                               onChange={this.handleInput} />
                             
                    </div>
  
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                              
                            </span>
                        </div>
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Expenditure"
                                  value={this.state.value} name="value" 
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
            <div className="Worker">
                
           
                {this.state.details.map((detail, id) => (
                    <div key={id}>
                        <div className="card shadow-lg">
                            <div className={"bg-"  + 
                                          " card-header"}>expenditure {id + 1}  </div>
                            <div className="card-body">
                                <blockquote className={"text-"  + 
                                                   " blockquote mb-0"}>
                                    <h1> {detail.detail} </h1>
                                    <footer className="blockquote-footer">
                                        {" "}
                                        <table className="table">
  <thead>
    <tr>
      <th scope="col">sr.no</th>
      <th scope="col">id</th>
      <th scope="col">reason</th>
      <th scope="col">expenditure</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{id+1}</th>
      <th scope="row">{detail.id}</th>
      <td>{detail.reason}</td>
      <td>{detail.expenditure}</td>
      
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
export default UserExpenses;