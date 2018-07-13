const battler = require('./battler')
const battles = battler()

const aPrime = {
  name: '   oP timus Prime     ',
}
const dPred = {
  name: '   p  Reda     king    ',
}
const a1 = {
  name: 'a1',
  courage: 10,
  strength: 10,
  skill: 10,
}
const a2 = {
  name: 'a2',
  courage: 5,
  strength: 5,
  skill: 5,
}
const a3 = {
  name: 'a3',
  strength: 10,
  intelligence: 10,
  speed: 10,
  endurance: 10,
  firepower: 10,
}
const a4 = {
  name: 'a4',
  strength: 5,
  intelligence: 5,
  speed: 5,
  endurance: 5,
  firepower: 5,
}
const d1 = {
  name: 'd1',
  courage: 10,
  strength: 10,
  skill: 10,
}
const d2 = {
  name: 'd2',
  courage: 5,
  strength: 5,
  skill: 5,
}
const d3 = {
  name: 'd3',
  strength: 10,
  intelligence: 10,
  speed: 10,
  endurance: 10,
  firepower: 10,
}
const d4 = {
  name: 'd4',
  strength: 5,
  intelligence: 5,
  speed: 5,
  endurance: 5,
  firepower: 5,
}

const battle1 = battles.autoWinRuleOne(a1, d2)
const battle2 = battles.autoWinRuleOne(a2, d1)
const battle3 = battles.autoWinRuleTwo(a1, d2)
const battle4 = battles.autoWinRuleTwo(a2, d1)
const battle5 = battles.fightWithOverallRating(a3, d4)
const battle6 = battles.fightWithOverallRating(a4, d3)
const battle7 = battles.fightWithOverallRating(a3, d3)

describe('Confirming battle outcomes', () => {
  it('battle1 winner should be a1', () => {
    expect(battle1.name).toBe('a1')
  })
  it('battle2 winner should be d1', () => {
    expect(battle2.name).toBe('d1')
  })
  it('battle3 winner should be a1', () => {
    expect(battle3.name).toBe('a1')
  })
  it('battle4 winner should be d1', () => {
    expect(battle4.name).toBe('d1')
  })
  it('battle5 winner should be a3', () => {
    expect(battle5.name).toBe('a3')
  })
  it('battle6 winner should be d3', () => {
    expect(battle6.name).toBe('d3')
  })
  it('battle7 should be a tie', () => {
    expect(battle7).toBe(null)
  })
})

describe('Detecting super bots/battles', () => {
  it('Prime should be a superBot', () => {
    expect(battles.isSuperBot(aPrime.name)).toBe(true)
  })
  it('Predaking should be a superBot', () => {
    expect(battles.isSuperBot(dPred.name)).toBe(true)
  })
  it('d2 should not be a superBot', () => {
    expect(battles.isSuperBot(d2.name)).toBe(false)
  })
  it('Predaking vs Predaking should be a superBattle', () => {
    expect(battles.isSuperBattle(dPred.name, dPred.name)).toBe(true)
  })
  it('Optimus vs Optimus should be a superBattle', () => {
    expect(battles.isSuperBattle(aPrime.name, aPrime.name)).toBe(true)
  })
  it('Optimus vs Predaking should be a superBattle', () => {
    expect(battles.isSuperBattle(aPrime.name, dPred.name)).toBe(true)
  })
  it('Optimus vs d2 should NOT be a superBattle', () => {
    expect(battles.isSuperBattle(aPrime.name, d2.name)).toBe(false)
  })
  it('Predaking vs a2 should NOT be a superBattle', () => {
    expect(battles.isSuperBattle(dPred.name, a2.name)).toBe(false)
  })
})
