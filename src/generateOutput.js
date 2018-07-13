function generateOutput(result) {
  let team1Name = ''
  let team1Survivors = ''
  let team1Members = ''

  let team2Name = ''
  let team2Survivors = ''
  let team2Members = ''

  const generateBattleString = function() {
    if (result.battleLog.length === 1) {
      return '1 battle'
    } else {
      return `${result.battleLog.length} battles`
    }
  }
  const generateNameList = function(team = []) {
    if (team[0] === undefined) {
      return 'No one!'
    }
    return team.reduce(function(accumulator, currentValue) {
      if (accumulator === currentValue.name) {
        return accumulator
      }
      return `${accumulator}, ${currentValue.name}`
    }, team[0].name)
  }

  // No battles fought
  if (result.battleLog.length === 0) {
    return `No battles
Not enough Transformers to fight!`
  }

  // Super battle!
  if (result.hadSuperBattle === true) {
    return `There was a super battle!
>>> ${result.battleLog[0][0]} VS ${result.battleLog[0][1]} <<<
Everyone died!`
  }

  // All battles were ties..
  if (result.teamAWins === 0 && result.teamBWins === 0) {
    if (result.teamASurvivors.length !== 0) {
      if (result.teamASurvivors[0].team === 'A') {
        team1Survivors = result.teamASurvivors
        team2Survivors = result.teamBSurvivors
      } else {
        team1Survivors = result.teamBSurvivors
        team2Survivors = result.teamASurvivors
      }
    }
    if (result.teamBSurvivors.length !== 0) {
      if (result.teamBSurvivors[0].team === 'A') {
        team1Survivors = result.teamBSurvivors
        team2Survivors = result.teamASurvivors
      } else {
        team1Survivors = result.teamASurvivors
        team2Survivors = result.teamBSurvivors
      }
    }
    team1Members = generateNameList(team1Survivors)
    team2Members = generateNameList(team2Survivors)

    return `${generateBattleString()}
All battles resulted in a tie!
Survivors from the Autobots: ${team1Members}
Survivors from the Decepticons: ${team2Members}`
  }

  if (result.teamAWins === result.teamBWins) {
    // Draw: each team won the same amount of battles
    if (result.teamASurvivors[0].team === 'A') {
      team1Survivors = result.teamASurvivors
      team2Survivors = result.teamBSurvivors
    } else {
      team1Survivors = result.teamBSurvivors
      team2Survivors = result.teamASurvivors
    }

    team1Members = generateNameList(team1Survivors)
    team2Members = generateNameList(team2Survivors)

    return `${generateBattleString()}
Each team won the same number of battles!
Survivors from the Autobots: ${team1Members}
Survivors from the Decepticons: ${team2Members}`
  }

  if (result.teamAWins !== result.teamBWins) {
    // Clear winner!
    if (result.teamAWins > result.teamBWins) {
      team1Survivors = result.teamASurvivors
      team2Survivors = result.teamBSurvivors
    } else {
      team1Survivors = result.teamBSurvivors
      team2Survivors = result.teamASurvivors
    }
    if (team1Survivors[0].team === 'A') {
      team1Name = 'Autobots'
      team2Name = 'Decepticons'
    } else {
      team1Name = 'Decepticons'
      team2Name = 'Autobots'
    }

    team1Members = generateNameList(team1Survivors)
    team2Members = generateNameList(team2Survivors)

    return `${generateBattleString()}
Winning team (${team1Name}): ${team1Members}
Survivors from the losing team (${team2Name}): ${team2Members}`
  }

  // No idea who won
  return `Results of the battle are inconclusive...`
}

module.exports = generateOutput
