
import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Bowerman', () => {
  const pers = new Bowerman('Иван');
  const exp = { name: 'Иван', attack: 25, deffense: 25 };
  expect(pers).toEqual(exp);
});

test('Swordsman', () => {
  const pers = new Swordsman('Сергей');
  const exp = { name: 'Сергей', attack: 40, deffense: 10 };
  expect(pers).toEqual(exp);
});

test('Magician', () => {
  const pers = new Magician('Алекс');
  const exp = { name: 'Алекс', attack: 10, deffense: 40 };
  expect(pers).toEqual(exp);
});

test('Daemon', () => {
  const pers = new Daemon('Феликс');
  const exp = { name: 'Феликс', attack: 10, deffense: 40 };
  expect(pers).toEqual(exp);
});

test('Undead', () => {
  const pers = new Undead('Макс');
  const exp = { name: 'Макс', attack: 25, deffense: 25 };
  expect(pers).toEqual(exp);
});

test('Zombie', () => {
  const pers = new Zombie('Володя');
  const exp = { name: 'Володя', attack: 40, deffense: 10 };
  expect(pers).toEqual(exp);
});
