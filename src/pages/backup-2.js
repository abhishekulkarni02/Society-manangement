import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import Workers_list from './pages/workers-list';

function App(){

    const [workers,setWorkers]=useState()
    const [editWorkers,setEditWorksers]=useState(null)

    useEffect(()=>{
        fetch('http://localhost:8000/admin/api/worker/',{
        'method':'GET',
         headers: {
             'Content-Type':'application.json',
             'Authorization':'Token a8071949265d99e1d711db198f8afd6b7b7f28f9',
         }
    })
    .then(resp=>resp.json())
    .then(resp=>setWorkers(resp))
    .catch(error=>console.log(error))
}, [])

const editBtn = (article) =>{
    setEditWorksers(workers)}
    return(
        <div className="App">
            <h3>Django and ReactJS Course</h3>
            <Workers_list workers={workers} editBtn/>
        
           
        </div>
    );
}

export default App;
<cite title="Source Title">{detail.name} {detail.phone_no} {detail.salary} {detail.Age} {detail.Role} <Photocontainer photos ={this.state.photos}/><img src={detail.photo} alt='display image' height="750" width="750"/> </cite>