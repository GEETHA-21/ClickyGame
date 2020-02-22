import React from "react";
import "./Score.css";

const score = props => (
    <div classname="score">
        {props.type}:{props.score}
    </div>
)
export default score;