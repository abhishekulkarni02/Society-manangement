import React from 'react';
import APIService from './APIservice';


function PseudoWorker(props){

    const editBtn = (worker) => {
        props.editBtn(worker)
        setEdiWorker(worker)
    }

    const deleteBtn = (worker) => {
        APIService.DeleteWorker(worker.id)
        .then(resp => props.deleteBtn(worker) )
        
    }

    return(
        <div>

            {props.workers.map(worker => {
                return (
                    <div key = {worker.id}> 

                    <button className="btn btn-primary" onClick={() => editBtn(worker)}>Update Worker</button>
                        <button className="btn btn-danger" onClick={() => deleteBtn(worker)}>Delete Worker</button>
                        </div>
                   
                )
          })}
            </div>
    )
}

export default PseudoWorker;