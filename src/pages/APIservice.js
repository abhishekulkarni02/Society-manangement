import React from "react";


export default class APIService{
    
    


static UpdateWorker(worker_id,body) {
    return fetch('http://localhost:8000/admin/api/worker/${worker_id}',{
        'method':'PUT',
         headers: {
         'Content-Type':'application.json',
    },
    body:JSON.stringify(body)
}).then(resp => resp.json())

}

static LoginUser(body) {
    return fetch('http://localhost:8000/auth/',{
        'method':'POST',
         headers: {
         'Content-Type':'application/json',
         
    },
    body:JSON.stringify(body)
}).then(resp => resp.json())
}

static DeleteWorker(worker_id,body) {
    return fetch('http://localhost:8000/admin/api/worker/${worker_id}/',{
        'method':'DELETE',
         headers: {
         'Content-Type':'application.json',
         
    },
    
})
}

static InsertWorker(body) {
    return fetch('http://localhost:8000/admin/api/worker/',{
        'method':'POST',
        headers: {
            'Content-Type':'application.json',   
        },
        body:JSON.stringify(body)
    }).then(resp => resp.json())
}

static SignupUser(body) {
    return fetch('http://localhost:8000/users/',{
        'method':'POST',
         headers: {
         'Content-Type':'application/json',
         
    },
    body:JSON.stringify(body)
}).then(resp => resp.json())
}





}