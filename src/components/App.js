import React, {Component} from "react";
import CalcBody from "./CalcBody.js";
import "../style/App.scss"

function App() {
    return(
        <>
            <h1>Calculator</h1>
            <CalcBody/>
            <p className="author">by ViBobukh</p>
        </>
    )
}

export default App;