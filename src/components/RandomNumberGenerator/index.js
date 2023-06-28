import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  button = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="background">
        <div className="background1">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.button} type="button" className="button">
            Generate
          </button>
          <p className="res">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
