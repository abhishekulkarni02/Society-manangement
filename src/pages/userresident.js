import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import './inner.css';
  
class UserResidents extends React.Component {

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
        num:""
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
  
    render() {
        return (
            <div className="Worker ">
                
            
           
  
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
export default UserResidents;
        