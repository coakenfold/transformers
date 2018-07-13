const createTeams = require('./createTeams')
const battler = require('./battler')
const generateOutput = require('./generateOutput')

let i = ``
let r = ``
let t = []

describe('Super Battles:', () => {
  it('Optimus Prime VS Predaking', () => {
    i = `Optimus Prime, A, 10, 10, 10, 10, 8, 10, 10, 10
Predaking, D, 10, 10, 10, 10, 8, 10, 10, 10`
    r = `There was a super battle!
>>> Optimus Prime VS Predaking <<<
Everyone died!`
    t = createTeams(i)
    expect(generateOutput(battler(t.a, t.d).battle())).toBe(r)
  })

  it('Optimus Prime VS Optimus Prime', () => {
    i = `Optimus Prime, A, 10, 10, 10, 10, 8, 10, 10, 10
Optimus Prime, D, 10, 10, 10, 10, 8, 10, 10, 10`
    r = `There was a super battle!
>>> Optimus Prime VS Optimus Prime <<<
Everyone died!`
    t = createTeams(i)
    expect(generateOutput(battler(t.a, t.d).battle())).toBe(r)
  })

  it('Predaking VS Predaking', () => {
    i = `Predaking, A, 10, 10, 10, 10, 8, 10, 10, 10
Predaking, D, 10, 10, 10, 10, 8, 10, 10, 10`
    r = `There was a super battle!
>>> Predaking VS Predaking <<<
Everyone died!`
    t = createTeams(i)
    expect(generateOutput(battler(t.a, t.d).battle())).toBe(r)
  })
})

it('Should be a Draw', () => {
  i = `A10, A, 10, 10, 10, 10, 10, 10, 9, 10
D9, D, 10, 10, 10, 10, 9, 10, 9, 10
A9, A, 10, 10, 10, 10, 9, 10, 10, 10
D10, D, 10, 10, 10, 10, 10, 10, 10, 10`
  r = `2 battles
Each team won the same number of battles!
Survivors from the Autobots: A9
Survivors from the Decepticons: D10`
  t = createTeams(i)
  expect(generateOutput(battler(t.a, t.d).battle())).toBe(r)
})

describe('Ties:', () => {
  it('One survivor', () => {
    i = `A8, A, 10, 10, 10, 10, 8, 10, 10, 10
D8, D, 10, 10, 10, 10, 8, 10, 10, 10
D8, D, 10, 10, 10, 10, 7, 10, 10, 10`
    r = `1 battle
All battles resulted in a tie!
Survivors from the Autobots: No one!
Survivors from the Decepticons: D8`
    t = createTeams(i)
    expect(generateOutput(battler(t.a, t.d).battle())).toBe(r)
  })
  it('No survivors', () => {
    i = `A8, A, 10, 10, 10, 10, 8, 10, 10, 10
D8, D, 10, 10, 10, 10, 8, 10, 10, 10`
    r = `1 battle
All battles resulted in a tie!
Survivors from the Autobots: No one!
Survivors from the Decepticons: No one!`
    t = createTeams(i)
    expect(generateOutput(battler(t.a, t.d).battle())).toBe(r)
  })
})

describe('Clear winners:', () => {
  it('Autobots: 1 battle', () => {
    i = `Optimus Prime, A, 10, 10, 10, 10, 10, 10, 10, 10
D10, D, 10, 10, 10, 10, 10, 10, 10, 10
D9, D, 10, 10, 10, 10, 9, 10, 10, 10`
    r = `1 battle
Winning team (Autobots): Optimus Prime
Survivors from the losing team (Decepticons): D9`
    t = createTeams(i)
    expect(generateOutput(battler(t.a, t.d).battle())).toBe(r)
  })
  it('Autobots: 2 battles', () => {
    i = `A10, A, 10, 10, 10, 10, 10, 10, 10, 10
A9, A, 10, 10, 10, 10,  9, 10, 10, 10
D10, D, 10, 10, 10, 10, 10, 10, 10, 10
D9, D, 10, 10, 10, 10,  9, 10,  9, 10
D8, D, 10, 10, 10, 10,  8, 10,  9, 10`
    r = `2 battles
Winning team (Autobots): A9
Survivors from the losing team (Decepticons): D8`
    t = createTeams(i)
    expect(generateOutput(battler(t.a, t.d).battle())).toBe(r)
  })
})
