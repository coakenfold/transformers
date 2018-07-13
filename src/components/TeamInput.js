/* eslint-disable no-unused-vars */
import React from 'react'
import style from './TeamInput.css'

class TeamInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form
        className="TeamInput"
        name="TeamInput"
        onSubmit={this.props.handleSubmit}
      >
        <label className="heading-2" htmlFor="TeamInput__input">
          Create Teams
        </label>
        <div className="TeamInput__group">
          <div id="TeamInput__hint" className="TeamInput__hint">
            <p>One Transformer per line</p>
            <p className="TeamInput__hint-heading">Format:</p>
            <p>
              Name, Team (A or D), Strength (0-10), Intelligence (0-10), Speed
              (0-10), Endurance (0-10), Rank (0-10), Courage (0-10), Firepower
              (0-10), Skill (0-10)
            </p>
            <p className="TeamInput__hint-heading">Example:</p>

            <ul className="TeamInput__eg">
              <li>Soundwave,D,8,9,2,6,7,5,6,10</li>
              <li>Bluestreak,A,6,6,7,9,5,2,9,7</li>
              <li>Hubcap,A,4,4,4,4,4,4,4,4</li>
            </ul>
          </div>
          <div className="TeamInput__input-container">
            <textarea
              aria-describedby="TeamInput__hint"
              id="TeamInput__input"
              className="TeamInput__input"
              onChange={this.props.handleChange}
              name="TeamInput__input"
              value={this.props.input}
            />
            <button>BATTLE!</button>
          </div>
        </div>
      </form>
    )
  }
}

module.exports = TeamInput
