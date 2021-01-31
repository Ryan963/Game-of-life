import React from 'react'
import classes from './Grid.module.css'
import Box from '../Box/Box'
const grid = (props) => {
    const width = (props.cols * 14) 
    var rowsArr = []

    var boxClass = ''
    for (let i = 0; i <props.rows; i++){
        for (let j = 0; j < props.cols; j++){
            let boxId = i + "_" + j;
            boxClass = props.gridFull[i][j] ? "on" : "off"
            rowsArr.push(
                <Box 
                boxClass = {boxClass} 
                key={boxId} 
                boxId={boxId} 
                row={i} 
                col={j} 
                selectBox={props.selectBox} />
            )
        }
    }
   
    return (
        <div className={classes.grid} style={{width: width}}>
            {rowsArr}
        </div>
    )
}

export default grid