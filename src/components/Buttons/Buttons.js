import React from 'react'
import classes from './Buttons.module.css'

const buttons = (props) => (
    <div className={classes.center}>
            <button 
            className="btn btn-primary" 
            onClick={props.playButton}>Play
            </button>
            <button 
            className="btn btn-primary" 
            onClick={props.pauseButton}>Pause
            </button>
            <button 
            className="btn btn-primary" 
            onClick={props.clear}>Clear
            </button>
            <button 
            className="btn btn-primary" 
            onClick={props.slow}>Slow
            </button>
            <button 
            className="btn btn-primary" 
            onClick={props.fast}>Fast
            </button>
            <button 
            className="btn btn-primary" 
            onClick={props.random}>Random
            </button>
            <button 
            className="btn btn-primary" 
            onClick={props.gliderGun}>Gosper Glider Gun
            </button>
            
    </div>
)


export default buttons