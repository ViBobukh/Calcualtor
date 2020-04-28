import React, {Component} from "react";
import "../style/EnterField.scss"

class EnterField extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="enterField">
                <input type="number"/>
            </div>
        )
    }
}

export default EnterField;