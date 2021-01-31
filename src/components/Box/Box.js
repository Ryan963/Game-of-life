import React from 'react'
import classes from './Box.module.css'

const Box = (props) => {
    return (
        <div 
        className = {[classes.box, classes[props.boxClass]].join(" ")}
        id = {props.id}
        onClick = {() => props.selectBox(props.row, props.col)}
         >

        </div>
    );
}

export default Box