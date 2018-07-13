/* eslint-disable no-unused-vars */
import React from 'react'
import style from './App.css'
import TeamInput from './TeamInput'
import BattleOutput from './BattleOutput'
import battler from '../battler'
import createTeams from '../createTeams'
import generateOutput from '../generateOutput'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ``,
      output: ``,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ input: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()

    const teams = createTeams(this.state.input)
    const battles = battler(teams.a, teams.d)
    const result = battles.battle()

    const output = generateOutput(result)
    this.setState({ output })
  }
  render() {
    return (
      <div className="App">
        <h1 className="heading-1">Transformers Battle Royale</h1>

        <TeamInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          input={this.state.input}
        />
        <BattleOutput output={this.state.output} />
      </div>
    )
  }
}

module.exports = App
