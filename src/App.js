import React from "react";
import './App.css';
import {useEffect } from "react";

import Worker from './pages/workers' ;
import Residents from './pages/residents' ;
import Expenses from './pages/expenses' ; 
import Login from './pages/login';
import {useState} from 'react';
import Form from './pages/Updateform';
import {BrowserRouter as  Router,Route,Routes}
    from 'react-router-dom';
import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Signup from "./pages/signup";
import UserResidents from "./pages/userresident";
import UserExpenses from "./pages/userexpenses";
import UserLogin from "./pages/userlogin";
import UserWorker from "./pages/userworkers";
import UserHome from "./pages/userhome";



  
    function App() {
        const [workers,setWorker]=useState([])
        const [editWorker,setEditWorker]=useState(null)
    
        useEffect( () => {
    
            fetch('http://localhost:8000/worker/', {
                'method':'GET',
                headers: {
                    'Content-Type':'application/json',
    
                }
            })
            .then(resp => resp.json())
            .then(resp => setWorker(resp))
            .catch(error => console.log(error))
        }
        )
    
        const editBtn =(article) => {
            setEditWorker(article)
    
        }
    
        const workerForm = () => {
            setEditWorker({name:'',photo:'',phone_no:'',Age:'',Role:'',salary:''})
        }
    
        const deleteBtn = (worker) => {
            const new_workers=workers.filter(myworker => {
                if(myworker.id=== worker.id){
                    return false
                }
                return true;
            })
            setWorker(new_workers)
        }
    
        return(
            <Router>
    <Routes>

        <Route exact path='/'  element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/workers' element={<Worker/>} />
        <Route path='/residents' element={<Residents/>}/>
        <Route path='/expenses' element={<Expenses/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/userresident' element={<UserResidents/>}/>
        <Route path='/userexpenses' element={<UserExpenses/>}/>
        <Route path='/userworkers' element={<UserWorker/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/userhome' element={<UserHome/>}/>
        
       
    </Routes>
    </Router>
        
           
        
        )
    

    

    
        }
export default App;
