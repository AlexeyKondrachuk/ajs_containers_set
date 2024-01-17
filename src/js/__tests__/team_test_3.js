import Team from '../app';

const first = { character: 'character_1' };
const second = { character: 'character_2' };


test('convert to Array', () => {
    const myTeam = new Team();
    myTeam.add(first);
    myTeam.add(second);
    expect(myTeam.toArray()).toEqual([first, second]);
  });