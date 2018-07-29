import {getRandomColor} from './randomColorGenerator.js'

export default function NewChild(e) {
  e.stopPropagation();
  this.setState({
    childColor: getRandomColor()
  })
}
