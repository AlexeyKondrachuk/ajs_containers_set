
import Team from '../app';

const lectorObject = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
};

test('test from lector', () => {
  const team = new Team();
  expect(() => {
    team.add(lectorObject);
    team.add({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    });
  }).toThrow('The character has already been added');
});







