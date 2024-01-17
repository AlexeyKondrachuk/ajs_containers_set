
import Team from '../app';

const first = { character: 'character_1' };
const second = { character: 'character_2' };
const doubleFirst = first;



test('add all without duplicate', () => {
    const myTeam = new Team();
    const addedMyTeam = myTeam.addAll(first, doubleFirst, second);
    expect(addedMyTeam.toArray()).toEqual([first, second]);
  });