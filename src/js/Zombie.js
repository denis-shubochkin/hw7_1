import Character from './Character';

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.deffense = 10;
  }
}
