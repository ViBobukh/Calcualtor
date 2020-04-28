import React, {Component} from "react";
import "../style/Numbers.scss"

class Numbers extends Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: [
                {value: "1", id: "1"}, {value: "2", id: "2"},
                {value: "3", id: "3"}, {value: "4", id: "4"},
                {value: "5", id: "5"}, {value: "6", id: "6"},
                {value: "7", id: "7"}, {value: "8", id: "8"},
                {value: "9", id: "9"}, {value: "0", id: "0"},
                {value: ".", id: "."}, {value: "00", id: "00"}
            ]
        }


    }

    render(){
        const RenderNumbers = this.state.numbers.map((key)=>{
            return <button key={key.id}>{key.value}</button>
        });
        return(
            <div className="numbers">
                {RenderNumbers}
            </div>
        )
    }
}

export default Numbers;