import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'
import NewChild from './newChild.js'

export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const color = getRandomColor()
    this.state = {
      color: color,
      childColor: getReducedColor(color),
    }
  }

  handleClick= () =>{
    const newColor = getRandomColor()
    this.setState = {
      color: newColor,
      childColor: getReducedColor(newColor)
    }
  }

  render() {
    const {color, childColor} = this.state
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: color, color: color}}>
        <Tier2 color={childColor} handleChildClick={NewChild.bind(this)} />
        <Tier2 color={childColor} handleChildClick={NewChild.bind(this)} />
      </div>
    )
  }
}
