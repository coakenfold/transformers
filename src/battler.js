function battler(a = [], d = []) {
  const autoWinRuleOne = function(opponentAlpha, opponentBeta) {
    // - if a transformer is down 4 or more Courage [AND] 3 or more of Strength they lose automatically
    const alphaCourageDelta = opponentBeta.courage - opponentAlpha.courage
    const alphaStrengthDelta = opponentBeta.strength - opponentAlpha.strength
    if (alphaCourageDelta <= -4 && alphaStrengthDelta <= -3) {
      return opponentAlpha
    }
    if (alphaCourageDelta >= 4 && alphaStrengthDelta >= 3) {
      return opponentBeta
    }
    return null
  }
  const autoWinRuleTwo = function(opponentAlpha, opponentBeta) {
    // - if greater 3 or more points in Skill they win automatically
    const alphaSkillDelta = opponentBeta.skill - opponentAlpha.skill
    if (alphaSkillDelta <= -3) {
      return opponentAlpha
    }
    if (alphaSkillDelta >= 3) {
      return opponentBeta
    }
    return null
  }
  const calculateOverallRating = function(bot) {
    return (
      bot.strength +
      bot.intelligence +
      bot.speed +
      bot.endurance +
      bot.firepower
    )
  }
  const determineAlphaBetaTeams = function(teamA = a, teamD = d) {
    let teamAlpha = teamA
    let teamBeta = teamD

    if (teamD.length > teamA.length) {
      teamAlpha = teamD
      teamBeta = teamA
    }
    return { teamAlpha, teamBeta }
  }
  const fightWithOverallRating = function(opponentAlpha, opponentBeta) {
    // - all else are determined by overall rating: Strength + Intelligence + Speed + Endurance + Firepower
    const alphaOverall = calculateOverallRating(opponentAlpha)
    const betaOverall = calculateOverallRating(opponentBeta)

    if (alphaOverall > betaOverall) {
      return opponentAlpha
    }
    if (betaOverall > alphaOverall) {
      return opponentBeta
    }
    return null
  }
  const isSuperBattle = function(alphaName, betaName) {
    return isSuperBot(alphaName) && isSuperBot(betaName)
  }
  const isSuperBot = function(name) {
    const n = name.toLowerCase().replace(/\s/gi, '')
    if (n === 'optimusprime' || n === 'predaking') {
      return true
    }
    return false
  }
  // Are you ready to rumble?
  const battle = function(teamA = a, teamD = d) {
    const teams = determineAlphaBetaTeams(teamA, teamD)

    let hadSuperBattle = false
    let battleLog = []

    let teamAWins = 0
    let teamASurvivors = []

    let teamBWins = 0
    let teamBSurvivors = []

    const teamAWon = function(a, b) {
      teamAWins += 1
      teamASurvivors.push(a)
      battleLog.push([a.name, b.name, a.name])
    }
    const teamBWon = function(a, b) {
      teamBWins += 1
      teamBSurvivors.push(b)
      battleLog.push([a.name, b.name, b.name])
    }

    for (let index = 0; index < teams.teamAlpha.length; index++) {
      const opponentAlpha = teams.teamAlpha[index]
      const opponentBeta = teams.teamBeta[index]
      // No opponent, no battle
      if (opponentBeta === undefined) {
        teamASurvivors.push(opponentAlpha)
        continue
      }

      // We have a fight!

      // (Predaking||Optimus Prime) vs (Predaking||Optimus Prime)
      if (isSuperBattle(opponentAlpha.name, opponentBeta.name)) {
        hadSuperBattle = true
        battleLog.push([opponentAlpha.name, opponentBeta.name, null])
        break
      }

      // (Predaking||Optimus Prime) fighting someone else
      if (isSuperBot(opponentAlpha.name)) {
        teamAWon(opponentAlpha, opponentBeta)
        continue
      }
      if (isSuperBot(opponentBeta.name)) {
        teamBWon(opponentAlpha, opponentBeta)
        continue
      }

      // Normal bots fighting...

      // Easy win 1
      const autoWinRuleOneResult = autoWinRuleOne(opponentAlpha, opponentBeta)
      if (autoWinRuleOneResult !== null) {
        if (opponentAlpha.name === autoWinRuleOneResult.name) {
          teamAWon(opponentAlpha, opponentBeta)
        } else {
          teamBWon(opponentAlpha, opponentBeta)
        }
        continue
      }

      // Easy win 2
      const autoWinRuleTwoResult = autoWinRuleTwo(opponentAlpha, opponentBeta)
      if (autoWinRuleTwoResult !== null) {
        if (opponentAlpha.name === autoWinRuleTwoResult.name) {
          teamAWon(opponentAlpha, opponentBeta)
        } else {
          teamBWon(opponentAlpha, opponentBeta)
        }
        continue
      }

      // Compare overall rating
      const fightWithOverallRatingResult = fightWithOverallRating(
        opponentAlpha,
        opponentBeta
      )
      if (fightWithOverallRatingResult !== null) {
        if (opponentAlpha.name === fightWithOverallRatingResult.name) {
          teamAWon(opponentAlpha, opponentBeta)
        } else {
          teamBWon(opponentAlpha, opponentBeta)
        }
        continue
      }

      // Ended in a tie, just log the battle
      battleLog.push([opponentAlpha.name, opponentBeta.name, null])
    }

    return {
      teamAWins,
      teamBWins,
      battleLog,
      teamASurvivors,
      teamBSurvivors,
      hadSuperBattle,
    }
  }

  return {
    determineAlphaBetaTeams,
    battle,
    isSuperBot,
    isSuperBattle,
    autoWinRuleOne,
    autoWinRuleTwo,
    fightWithOverallRating,
  }
}
module.exports = battler
