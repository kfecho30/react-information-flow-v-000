import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor),
      grandChildColor: getReducedColor(childColor)
    }
  }

  handleClick= () =>{
    const newColor = getRandomColor()
    this.setState = {
      color: newColor,
      childColor: getReducedColor(color)
    }
  }

  render() {
    const {color, childColor} = this.state
    return (
      <div onClick={(this.handleClick) => {this.setState({color: "#000"})}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={childColor} handleChildClick={newChildColor.bind(this)} />
        <Tier2 color={"#0FF"} />
      </div>
    )
  }
}
