import React, {Component} from "react";
import "../style/Actions.scss";
import * as MathLib from "./lib/Math.js"



    function Actions(props) {
        const objFunc ={
            '/': MathLib.division,
            '*': MathLib.multiplication,
            '-': MathLib.minus,
            '+': MathLib.plus,
            '√': MathLib.squareRoot,
            '²': MathLib.square,
        };

        let numbers = props.value.split(props.act);
        let result = 0;
        for(let i in objFunc){
            if (objFunc[i] === props.act) {
                result = objFunc[i](numbers[0], numbers[2])
            }
        }
        props.newValue(result)

    }



export default Actions;