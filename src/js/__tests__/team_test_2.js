import Team from '../app';

const first = { character: 'character_1' };
const second = { character: 'character_2' };
const doubleFirst = first;
const lectorObject = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
};

test('no throw error with different characters', () => {
    const myTeam = new Team();
    expect(() => {
      myTeam.add(first);
      myTeam.add(second);
    }).not.toThrow();
  });