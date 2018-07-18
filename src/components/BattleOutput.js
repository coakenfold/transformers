/* eslint-disable no-unused-vars */
import React from 'react'
import style from './BattleOutput.css'

class BattleOutput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="BattleOutput">
        <div className="BattleOutput__main">
          <h2 className="heading-2">Battle Results!</h2>
          <pre className="BattleOutput__results">{this.props.output}</pre>
        </div>

        <button
          className="BattleOutput__rematch"
          onClick={this.props.handleRematch}
        >
          REMATCH!
        </button>
      </div>
    )
  }
}

module.exports = BattleOutput
