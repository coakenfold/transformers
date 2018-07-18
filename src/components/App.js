/* eslint-disable no-unused-vars */
import React from 'react'
import style from './App.css'
import TeamInput from './TeamInput'
import BattleOutput from './BattleOutput'
import battler from '../battler'
import createTeams from '../createTeams'
import generateOutput from '../generateOutput'

import megatron from './megatron.png'
import optimus from './optimus.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      card: '',
      input: ``,
      output: ``,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRematch = this.handleRematch.bind(this)
  }
  handleChange(e) {
    this.setState({ input: e.target.value })
  }
  handleRematch() {
    this.setState({ card: '' })
  }
  handleSubmit(e) {
    e.preventDefault()

    const teams = createTeams(this.state.input)
    const battles = battler(teams.a, teams.d)
    const result = battles.battle()

    const output = generateOutput(result)
    this.setState({ output, card: 'flipped' })
  }
  render() {
    return (
      <div className="App">
        <div className="container" data-state={this.state.card}>
          <div className="card">
            <div className="card__side">
              <TeamInput
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                input={this.state.input}
              />
            </div>
            <div className="card__side card__side--back">
              <BattleOutput
                handleRematch={this.handleRematch}
                output={this.state.output}
              />
            </div>
          </div>
        </div>

        <div className="credits">
          Credits:{' '}
          <a href="https://dribbble.com/shots/3880151-Megatron">Megatron</a>{' '}
          <a href="https://dribbble.com/shots/3867429-Optimus-Prime">Optimus</a>
        </div>

        <div className="background">
          <div className="autobot">
            <img src={optimus} alt="Optimus Prime" />
          </div>
          <div className="decepticon">
            <img src={megatron} alt="Megatron" />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = App
