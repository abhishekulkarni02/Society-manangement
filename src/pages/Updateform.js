import { getThemeProps } from '@mui/system';
import React from'react';


function Form(props){

    return(
        <div>
            {props.article ? (

                <div className ="mb-3">
                    <label htmlFor="title " className="form-label">Title</label>
                    <input type="text" className = "form-control" id="title" placeholder="Please enter name"/>
                    </div>

            ) : null }
        </div>

    )
}

export default Form;