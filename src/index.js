/*const createTeams = require('./src/createTeams')
const battler = require('./src/battler')
const generateOutput = require('./src/generateOutput')

// [0-name, 1-team, 2-strength, 3-intelligence, 4-speed, 5-endurance, 6-rank, 7-courage, 8-firepower, 9-skill]
const rawInput = `

A10, A, 10, 10, 10, 10, 10, 10, 10, 10
 A9, A, 10, 10, 10, 10,  9, 10, 10, 10
D10, D, 10, 10, 10, 10, 10, 10, 10, 10
 D9, D, 10, 10, 10, 10,  9, 10,  9, 10
 D8, D, 10, 10, 10, 10,  8, 10,  9, 10





`
const teams = createTeams(rawInput)
const battles = battler(teams.a, teams.d)
const result = battles.battle()
const output = generateOutput(result)
console.log(output)
*/
var React = require('react')
var ReactDOM = require('react-dom')

var App = require('./components/App')

ReactDOM.render(<App />, document.getElementById('appContainer'))
