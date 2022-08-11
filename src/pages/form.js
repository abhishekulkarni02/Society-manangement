import React,{useState} from 'react';
import APIService from './APIservice';
import InsertWorker from './insertworkers';

function Form(props){
    const [photo,setPhoto]=useState(null)
    const [name,setName]=useState(props.worker.name)
    const [phone_no,setPhone_no]=useState(props.worker.phone_no)
    const [Age,setAge]=useState(props.worker.Age)
    const [Role,setRole]=useState(props.worker.Role)
    const [salary,setSalary]=useState(props.worker.salary)

    const updateWorker = () => {
        APIService.UpdateWorker(props.worker.id,{name,photo,phone_no,Age,Role,salary})
        .then(resp => console.log(resp))

    }

    const InsertWorker = () => {
        APIService.InsertWorker({name,phone_no,Age,Role,photo,salary})
    }

    return(
        <div>Hi
        {props.worker ? (
            <div className ="mb-3">
            <label htmlFor="title " className="form-label">Title</label>
            <input type="text" className = "form-control" id="title" placeholder="Please enter name"
            value={name} onChange = {e =>setName(e.target.value)}/>
            </div>



        ): null}
        {props.worker.id ? ( <button onClick={updateWorker} className='btn btn-success'>Update worker</button>)
        : <button onClick={InsertWorker} className='btn btn-success'>Insert worker</button>
       
        }
        </div>

    )
}

export default Form;
