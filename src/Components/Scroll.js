import React from "react";

const Scroll = (props)=>{
    return(
        <div style={{overflowY:'scroll', padding:'2em', height:'60vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;