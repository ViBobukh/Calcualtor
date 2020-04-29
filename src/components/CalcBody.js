import React, {Component} from "react";
import EnterField from "./EnterField.js";
import Buttons from "./Buttons.js";
import * as MathLib from "./lib/Math.js"


class CalcBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            act: ''
        };
        this.action = ['/', '*', '-', '+', '√', '²'];
        this.objFunc ={
            '/': MathLib.division,
            '*': MathLib.multiplication,
            '-': MathLib.minus,
            '+': MathLib.plus,
            '√': MathLib.squareRoot,
            '²': MathLib.square,
        };
    }



    changeValue(value){
        for(let i in this.action){
            this.setState({
                value: this.state.value + value
            });
            if(value === this.action[i] && value !== '=' && value !== 'AC'){
                this.setState({
                    act: this.state.act + value
                })
            }else if(value === 'AC'){
                this.setState({
                    value: this.state.value = '',
                    act: this.state.act = ''
                })
            }else if(value === '='){
                let numbers = this.state.value.split(this.state.act);
                console.log(numbers[0], numbers[1]);
                this.setState({
                    value: this.state.value = `${this.objFunc[this.state.act](numbers[0], numbers[1])}`
                })
            }
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