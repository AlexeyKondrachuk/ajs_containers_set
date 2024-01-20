import Team from '../app';

const first = { character: 'character_1' };
const second = { character: 'character_2' };


test('no throw error with different characters', () => {
    const myTeam = new Team();
    expect(() => {
      myTeam.add(first);
      myTeam.add(second);
    }).not.toThrow();
  });