import React from "react";

const Image = (props) => {
    return(
        <section>
        <img src={props.url} alt="display image" />
        </section>
    )
}

export default Image;