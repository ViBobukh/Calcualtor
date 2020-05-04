import React, {Component} from "react";
import EnterField from "./EnterField.js";
import Buttons from "./Buttons.js";


class CalcBody extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    changeValue(value){
        console.log(value);
        this.setState({
            value: this.state.value + value
        });
        if(value === 'AC'){
            this.setState({
                value: this.state.value = '',
            })
        }else if(value === '='){
            this.setState({
                value: this.state.value = eval(this.state.value)
            })
        }
    }

    render() {
        return (
            <>
                <EnterField value={this.state.value}/>
                <Buttons  changeValue={this.changeValue.bind(this)}/>
            </>
        )
    }
}

export default CalcBody;