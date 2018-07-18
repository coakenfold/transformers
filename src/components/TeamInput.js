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
        <div className="TeamInput__main">
          <label className="heading" htmlFor="TeamInput__input">
            Create Teams
          </label>

          <div id="TeamInput__hint" className="TeamInput__hint">
            <p>One Transformer per line.</p>
            <p className="TeamInput__hint-heading">FORMAT</p>
            <p className="TeamInput__eg">
              Name, Team<sup title="A or D">§</sup>, Strength<sup title="0—10">
                †
              </sup>, Intelligence<sup title="0—10">†</sup>, Speed<sup title="0—10">
                †
              </sup>, Endurance<sup title="0—10">†</sup>, Rank<sup title="0—10">
                †
              </sup>, Courage<sup title="0—10">†</sup>, Firepower<sup title="0—10">
                †
              </sup>, Skill<sup title="0—10">†</sup>
            </p>
            <p>
              <sup className="TeamInput__eg" title="A or D">
                §
              </sup>{' '}
              = A or D,{' '}
              <sup className="TeamInput__eg" title="0—10">
                †
              </sup>{' '}
              = 0—10
            </p>

            <p className="TeamInput__hint-heading">EXAMPLE</p>

            <ul className="TeamInput__eg-list">
              <li className="TeamInput__eg">Soundwave,D,8,9,2,6,7,5,6,10</li>
              <li className="TeamInput__eg">Bluestreak,A,6,6,7,9,5,2,9,7</li>
              <li className="TeamInput__eg">Hubcap,A,4,4,4,4,4,4,4,4</li>
            </ul>
          </div>
          <textarea
            aria-describedby="TeamInput__hint"
            id="TeamInput__input"
            className="TeamInput__input"
            onChange={this.props.handleChange}
            name="TeamInput__input"
            value={this.props.input}
          />
        </div>
        <button disabled={!this.props.input} className="TeamInput__submit">
          BATTLE!
        </button>
      </form>
    )
  }
}

module.exports = TeamInput
