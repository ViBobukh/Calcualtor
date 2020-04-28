import React, {Component} from "react";
import "../style/EnterField.scss"

function EnterField(props) {
    return(
        <div className="enterField">
            <input onChange={()=>{}} value={props.value}/>
        </div>
    )
}

export default EnterField;