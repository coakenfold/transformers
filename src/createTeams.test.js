const createTeams = require('./createTeams')

const rawInput = `
ABOMINUS, D, 10, 1, 3, 10, 5, 10, 8, 4
ASTROTRAIN, D, 9, 7, 10, 7, 6, 7, 6, 8
Bluestreak, A, 6, 6, 7, 9, 5, 2, 9, 7
Bluestreak, A, 4, 4, 4, 4, 4, 4, 4, 4
BARRAGE, D, 10, 8, 3, 7, 5, 10, 9, 8
`
const teams = createTeams(rawInput)

describe('Team: Decepticons', () => {
  it('Should be 3', () => {
    expect(teams.d.length).toBe(3)
  })
  it('Astrotrain should be first', () => {
    expect(teams.d[0].name.toLowerCase()).toBe('astrotrain')
  })
})
describe('Team: Autobots', () => {
  it('Should be 2', () => {
    expect(teams.a.length).toBe(2)
  })
  it('Bluestreak should be first', () => {
    expect(teams.a[0].name.toLowerCase()).toBe('bluestreak')
  })
})
