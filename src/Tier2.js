import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'
import NewChild from './newChild.js'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }

  render() {
     const {color, childColor} = this.state
    return (
      <div onClick={this.props.handleChildClick} className="tier2" style={{backgroundColor: color, color: color}}>
        <Tier3 color={childColor} handleChildClick={NewChild.bind(this)} />
        <Tier3 color={childColor} handleChildClick={NewChild.bind(this)} />
      </div>
    )
  }
}
