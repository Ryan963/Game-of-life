import React, { Component } from 'react'
import './App.module.css';
import Grid from '../components/Grid/Grid'
import classes from './App.module.css'
import Buttons from '../components/Buttons/Buttons'
function arrayClone(arr){
  return JSON.parse(JSON.stringify(arr))
}

class App extends Component {
  constructor(){
    super()
    this.speed = 100;
    this.rows = 40;
    this.cols = 80
    this.state = {
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
  }
  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col]
    this.setState({gridFull: gridCopy})
  }

  randomClickHandler = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        if (Math.floor(Math.random() * 4) === 1){
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({gridFull: gridCopy})
  }

 
  play = () => {
    let grid = this.state.gridFull
    let gridCopy = arrayClone(this.state.gridFull)
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        let count = 0
        if (i > 0) if (grid[i - 1][j]) count++;
        if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (grid[i - 1][j + 1]) count++
        if (j < this.cols - 1) if (grid[i][j + 1]) count++
        if (j > 0) if (grid[i][j - 1]) count++
        if (i < this.rows - 1) if (grid[i + 1][j]) count++
        if (i < this.rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++
        if (i < this.rows - 1 && j < this.cols - 1) if (grid[i + 1][j + 1]) count++
        if (gridCopy[i][j] && (count < 2 || count > 3)) gridCopy[i][j] = false
        if (!gridCopy[i][j] && count == 3) gridCopy[i][j] = true         
      }
    }
    this.setState({gridFull: gridCopy})
  }
  playClickHandler = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.speed)
  }

   pauseClickHandler = () => {
     clearInterval(this.intervalId)
    }
    clearClickHandler = () => {
      let gridCopy = [...this.state.gridFull]
      .map(row => row.map( col => false))
      this.setState({gridFull: gridCopy})
      this.pauseClickHandler()
    }
    slowClickHandler = () => {
      this.speed = 300
      this.playClickHandler()
    }

    fastClickHandler = () => {
      this.speed = 100
      this.playClickHandler() 
    }
 
    gosperClickHandler = () => {
      this.clearClickHandler()
      let r = Math.floor(this.rows / 5) 
      let c = Math.floor(this.cols/ 10)
      let pattern = [`${r}${c}`, `${r + 1}${c}`, `${r}${c + 1}`, `${r + 1}${c + 1}`,
      `${r + 2}${c + 10}`,`${r + 1}${c + 10}`, `${r}${c + 10}`, `${r + 3}${c + 11}`, 
      `${r - 1}${c + 11}`, `${r - 2}${c + 12}`, `${r - 2}${c + 13}`,`${r + 4}${c + 12}`,
      `${r + 4}${c + 13}`, `${r + 1}${c + 14}`, `${r - 1}${c + 15}`, `${r + 3}${c + 15}`,
      `${r}${c + 16}`, `${r + 1}${c + 16}`, `${r + 2}${c + 16}`, `${r + 1}${c + 17}`,
      `${r - 1}${c + 20}`,`${r - 2}${c + 20}`,`${r}${c + 20}`,`${r - 1}${c + 21}`,
       `${r - 2}${c + 21}`,`${r}${c + 21}`, `${r - 3}${c + 22}`, `${r + 1}${c + 22}`,
       `${r + 1}${c + 24}`, `${r + 2}${c + 24}`,`${r - 3}${c + 24}`,`${r - 4}${c + 24}`,
       `${r - 1}${c + 34}`,`${r - 2}${c + 34}`,`${r - 1}${c + 35}`,`${r - 2}${c + 35}`]
      let gridCopy = [...this.state.gridFull]
      for(let i = 0; i < this.rows; i++){
        for(let j = 0; j < this.cols; j++){
          if (pattern.indexOf(`${i}${j}`) !== -1){
            gridCopy[i][j] = true
          }
        }
     }
      this.setState({gridFull: gridCopy})
    }

  render(){
    return (
      <div className= 'App'>
        <h1>Game of Life</h1>
        <Buttons
          playButton={this.playClickHandler}
          pauseButton={this.pauseClickHandler}
          slow={this.slowClickHandler}
          fast={this.fastClickHandler}
          clear={this.clearClickHandler}
          random = {this.randomClickHandler}
          gliderGun={this.gosperClickHandler}
        />
        <Grid 
        gridFull = {this.state.gridFull}
        rows = {this.rows}
        cols = {this.cols}
        selectBox = {this.selectBox}
        />
      </div>
    );
  }
}

export default App;
