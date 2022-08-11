import React, { useState,useEffect } from 'react';
import PseudoWorker from './pseudoworker';
import Form from './form';


function Pseudoapp()
{
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
        <div>Hi
             <div className="container jumbotron ">
            <button className="btn btn-success" onClick={workerForm}>Insert worker</button></div>
        <PseudoWorker workers={workers} editBtn={editBtn} deleteBtn={deleteBtn}></PseudoWorker>
        {editWorker ?  <Form worker={editWorker}/> : null }
       
        </div>
    )
}

export default Pseudoapp;