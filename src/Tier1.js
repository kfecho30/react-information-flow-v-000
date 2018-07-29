import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'
import NewChild from './NewChild.js'

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
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: color, color: color}}>
        <Tier2 color={childColor} handleChildClick={newChild.bind(this)} />
        <Tier2 color={childColor} handleChildClick={newChild.bind(this)} />
      </div>
    )
  }
}
