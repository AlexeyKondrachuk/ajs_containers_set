import Team from '../app';

const first = { character: 'character_1' };
const second = { character: 'character_2' };
const doubleFirst = first;


test('add all without throw', () => {
    const myTeam = new Team();
    expect(() => {
      myTeam.addAll([first, doubleFirst, second]);
    }).not.toThrow();
  });