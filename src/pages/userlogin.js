import React, {useState,useEffect,setState} from 'react';
import APIService from './APIservice';
import {useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import Signup from './signup'

function UserLogin(){
    
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [token,setToken]=useState('')
    const isauth=useState(true)

        let navigate = useNavigate();
       /* function handleClick(){
            return(
                navigate('/sl')
            )
        }*/
       



    const loginBtn = () =>
    {
        APIService.LoginUser({username,password})
        .then(resp => 
        setToken('mytoken',resp.token))
        .catch(err =>{ 
            console.log(err)
        })

        if(token!==''){
            navigate('/home')
        }
        else{
            
            navigate('/login')
        }
        
    
        
    }

    const signupBtn = () => {
        navigate('/signup')
    }

    const UserLoginBtn = () => {
        navigate('/userhome')
    }



    return(
        <div className= "App">
            <h1>User Login</h1>

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

            <button onClick={UserLoginBtn} className = "btn btn-primary">Submit</button>
            <br></br>
            <br></br>
         <h5>   <button onClick={signupBtn} className ="btn btn-primary">SignUp</button>  Instead</h5>
         <br></br>
           <h5> <button onClick={loginBtn} className ="btn btn-primary">Login</button>  as admin</h5>
        </div>
    )

    
    }

    export default UserLogin;