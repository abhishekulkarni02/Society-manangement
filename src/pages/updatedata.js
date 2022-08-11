import React, {useState,useEffect} from "react";
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

const UpdateWorker = () => {

    const [photo,setPhoto]=useState(null)
    const [name,setName]=useState("")
    const [phone_no,setPhone_no]=useState("")
    const [age,setAge]=useState("")
    const [role,setRole]=useState("")
    const [salary,setSalary]=useState("")

    const {id} =useParams();
    let navigate=useNavigate()

    const loadProducts = async() => {
        const { data } = await axios.get("http://localhost:8000/worker/${id}/")
        console.log(data)
        setPhoto(data.photo)
        setName(data.name)
        setPhone_no(data.phone_no)
        setAge(data.age)
        setRole(data.role)
        setSalary(data.salary)
    }

    useEffect(() => {
        loadProducts()
    },[])

    const UpdateProductInfo = async () => {
        let formField = new FormData()
        formField.append('Name',name)
        formField.append('phone_no',phone_no)
        formField.append('age',age)
        formField.append('role',role)
        formField.append('salary',salary)
        if(photo!==null)
        {
            formField.append('photo',photo)
        }

        await axios({
            method:'PUT',
            url:"http://localhost:8000/worker/${id}/",
            data:formField

        }).then(response => {
            console.log(response.data)
            navigate('/workers')
        })
                

    }

    return(
        <div>
            <h1>Update Page</h1>
            <div className="form-group">
            <div className="form-group">
            <img src={photo} height="200" width="150"/>
            <label>Select image to upload</label>
            <input
                type="file"
                className="form-control form-control-lg"
                name="image"
                onChange={(e) => setPhoto(e.target.files[0])}/>
            </div>

            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={(e) =>setName(e.target.value)}/>
            </div>

            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter phone no."
                name="contact"
                value={phone_no}
                onChange={(e) =>setPhone_no(e.target.value)}/>
            </div>

            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter age"
                name="name"
                value={age}
                onChange={(e) =>setAge(e.target.value)}/>
            </div>

            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter role"
                name="name"
                value={role}
                onChange={(e) =>setRole(e.target.value)}/>
            </div>

            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter salary"
                name="name"
                value={salary}
                onChange={(e) =>setSalary(e.target.value)}/>
            </div>
            </div>

            <button className="btn btn-success" onClick={() => UpdateProductInfo}>Update</button>

        </div>
    )
}

export default UpdateWorker;