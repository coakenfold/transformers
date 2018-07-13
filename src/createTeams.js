function createTeams(rawInput) {
  const teams = {
    a: [],
    d: [],
  }
  const sortTeam = function(alpha, beta) {
    if (beta.rank < alpha.rank) {
      return -1
    }
    if (beta.rank > alpha.rank) {
      return 1
    }
    return 0
  }
  const createObject = function(competitor) {
    return {
      name: competitor[0],
      team: competitor[1],
      strength: competitor[2],
      intelligence: competitor[3],
      speed: competitor[4],
      endurance: competitor[5],
      rank: competitor[6],
      courage: competitor[7],
      firepower: competitor[8],
      skill: competitor[9],
    }
  }

  const prepRawInput = rawInput.split(/\n/g).map(function(currentValue) {
    return currentValue.split(/\s*,\s*/)
  })
  let competitors = []
  for (let index = 0; index < prepRawInput.length; index++) {
    const element = prepRawInput[index]
    if (element.length !== 10) {
      continue
    }
    competitors.push(
      element.map(function(currentValue, index) {
        if (index === 0) {
          return currentValue
        }
        if (index === 1) {
          return currentValue.toUpperCase()
        }
        return Number(currentValue)
      })
    )
  }
  competitors.forEach(function(currentValue) {
    teams[currentValue[1].toLowerCase()].push(createObject(currentValue))
  })
  teams.a.sort(sortTeam)
  teams.d.sort(sortTeam)

  return teams
}
module.exports = createTeams
