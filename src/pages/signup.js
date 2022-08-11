import React, {useState,useEffect,setState} from 'react';
import APIService from './APIservice';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Signup(){
    
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [token,setToken]=useState('')
    const isauth=useState(true)
    const [email,setEmail]=useState('')

        let navigate = useNavigate();
       /* function handleClick(){
            return(
                navigate('/sl')
            )
        }*/
       



    const SignupBtn = () =>
    {
       
        APIService.SignupUser({username,password,email})
        .then(resp => 
        setToken('mytoken',resp.token))
        .catch(err =>{ 
            console.log(err)
        })

       navigate("/userhome")

       //axios.get("")
        
    }



    return(
        <div className= "App">
            <h1>User SignUp</h1>

            <div className = "mb-3">
            <label htmlFor = "username" className = "form-label">username</label>
            <input type = "text" className = "form-control" id="username" placeholder="Please enter username"
            value ={username} onChange = { e => setUsername(e.target.value)}
            />
            </div>

            <div className = "mb-3">
            <label htmlFor = "password" className = "form-label">password</label>
            <input type = "password" className = "form-control" id="password" placeholder="Please enter password"
            value ={password} onChange = { e => setPassword(e.target.value)}
            />
            </div>

            <div className = "mb-3">
            <label htmlFor = "email" className = "form-label">email</label>
            <input type = "text" className = "form-control" id="email" placeholder="Please enter email"
            value ={email} onChange = { e => setEmail(e.target.value)}
            />
            </div>


            <button onClick={SignupBtn} className = "btn btn-primary">Submit</button>
        </div>
    )

    
    }


export default Signup;