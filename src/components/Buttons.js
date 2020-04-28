import React, {Component} from "react";
import Actions from "./Actions.js";
import Numbers from "./Numbers.js";
import "../style/Buttons.scss"

class Buttons extends Component{
    constructor(props){
        super(props);
        this.state = {
            buttons: [
                {value: "AC", id: "AC", class: "action"},{value: "√", id: "√", class: "action"}, {value: "²", id: "²", class: "action"}, {value: "/", id: "/", class: "action"},
                {value: "7", id: "7", class: "number"}, {value: "8", id: "8", class: "number"}, {value: "9", id: "9", class: "number"}, {value: "*", id: "*", class: "action"},
                {value: "4", id: "4", class: "number"}, {value: "5", id: "5", class: "number"}, {value: "6", id: "6", class: "number"}, {value: "+", id: "+", class: "action"},
                {value: "1", id: "1", class: "number"}, {value: "2", id: "2", class: "number"}, {value: "3", id: "3", class: "number"}, {value: "-", id: "-", class: "action"},
                {value: "0", id: "0", class: "number"}, {value: ".", id: ".", class: "number"}, {value: "00", id: "00", class: "number"}, {value: "=", id: "=", class: "action"}
            ]
        };
    }


    render(){
        const RenderButtons = this.state.buttons.map((key)=>{
            return <button
                onClick={() => {
                    this.props.changeValue(key.value);
                }}
                className={key.class}
                key={key.id}
            >{key.value}</button>
        });
        return(
            <div className="buttons">
                {RenderButtons}
            </div>
        )
    }
}

export default Buttons;