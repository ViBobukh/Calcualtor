import React, {Component} from "react";
import "../style/Actions.scss"

class Actions extends Component{
    constructor(props){
        super(props);
        this.state={
            actions: [
                {value: "AC", id: "AC"},
                {value: "√", id: "√"},
                {value: "²", id: "²"},
                {value: "/", id: "/"},
                {value: "*", id: "*"},
                {value: "+", id: "+"},
                {value: "-", id: "-"},
                {value: "=", id: "="},


            ]
        }
    }

    render(){
        const RenderActions = this.state.actions.map((key)=>{
            return <button key={key.id}>{key.value}</button>
        });
        return(
            <div className="actions">
                {RenderActions}
            </div>
        )
    }
}

export default Actions;